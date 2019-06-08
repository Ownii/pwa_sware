import { call, put, takeEvery, select } from 'redux-saga/effects';
import {
    addToMoveHistory,
    MOVE,
    moved,
    UNDO,
    move,
    removeLastFromMoveHistory,
    RESTART,
    playLevel,
    restart
} from '../actions/play.actions';
import { BLOCK_TYPE_MOVE, BLOCK_TYPE_TARGET } from '../utils/constants';
import { fromJS } from 'immutable';
import { getLevelById } from '../selectors/levels.selectors';
import {
    getCurrentLevel,
    isLevelCompleted,
    getCurrentMoveCount,
    getLastMove
} from '../selectors/play.selectors';
import { finishLevel } from '../actions/levels.actions';

function* undo() {
    const moves = yield select(getCurrentMoveCount);
    if (moves === 1) {
        yield put(restart());
    } else {
        const lastMove = yield select(getLastMove);
        if (lastMove) {
            yield call(
                moveBlocks,
                move(lastMove[0] * -1, lastMove[1] * -1, false)
            );
        }
    }
}

function* isUndoMove(stepX, stepY, _blocks) {
    const lastMove = yield select(getLastMove);
    if (lastMove && lastMove[0] * -1 === stepX && lastMove[1] * -1 === stepY) {
        const moves = yield select(getCurrentMoveCount);
        if (moves > 1) return true;
        const likeStart = yield call(isLikeStart, _blocks);
        if (likeStart) return true;
    }
    return false;
}

function* isLikeStart(_blocks) {
    const currentLevel = yield select(getCurrentLevel);
    const startLevel = yield select(getLevelById(currentLevel.get('id')));
    const startLevelBlocks = startLevel.get('blocks');
    for (let i = 0; i < startLevelBlocks.size; i++) {
        let block = startLevelBlocks.get(i);
        if (block.get('type') === BLOCK_TYPE_MOVE) {
            let curBlock = getBlockAt(
                block.get('x'),
                block.get('y'),
                _blocks,
                currentLevel
            );
            if (
                !curBlock ||
                !(
                    curBlock.get('type') === block.get('type') &&
                    curBlock.get('color') === block.get('color')
                )
            ) {
                return false;
            }
        }
    }

    return true;
}

function* moveBlocks(action) {
    const stepX = action.payload.x;
    const stepY = action.payload.y;
    if (stepX === 0 && stepY === 0) return;

    const currentLevel = yield select(getCurrentLevel);
    let level = fromJS(currentLevel.toJS());
    const blocks = level.get('blocks');
    let sortedBlocks = blocks.sort((a, b) => (b.get('x') - a.get('x')) * stepX);
    sortedBlocks = sortedBlocks.sort(
        (a, b) => (b.get('y') - a.get('y')) * stepY
    );
    let movedAnything = false;
    for (let i = 0; i < sortedBlocks.size; i++) {
        let block = sortedBlocks.get(i);
        if (block.get('type') === BLOCK_TYPE_MOVE) {
            block = block.set('lastX', block.get('x'));
            block = block.set('lastY', block.get('y'));
            while (
                !getBlockAt(
                    block.get('x') + stepX,
                    block.get('y') + stepY,
                    sortedBlocks,
                    level
                )
            ) {
                block = block.set('x', block.get('x') + stepX);
                block = block.set('y', block.get('y') + stepY);
                movedAnything = true;
            }
            sortedBlocks = sortedBlocks.set(i, block);
        }
    }
    level = level.set('blocks', sortedBlocks);
    if (movedAnything) {
        yield put(moved(level));
        if (!(yield call(isUndoMove, stepX, stepY, sortedBlocks))) {
            yield put(addToMoveHistory([stepX, stepY]));
        } else {
            yield put(removeLastFromMoveHistory());
        }
        if (yield select(isLevelCompleted)) {
            yield put(
                finishLevel(currentLevel, yield select(getCurrentMoveCount))
            );
        }
    }
}

function* restartLevel() {
    const currentLevel = yield select(getCurrentLevel);
    const level = yield select(getLevelById(currentLevel.get('id')));
    yield put(playLevel(level));
}

function getBlockAt(x, y, _blocks, level) {
    const blocks = _blocks ? _blocks : level.get('blocks');
    const size = level.get('size');
    if (x >= size || y >= size || y < 0 || x < 0) return true;
    for (let i = 0; i < blocks.size; i++) {
        let block = blocks.get(i);
        if (
            block.get('x') === x &&
            block.get('y') === y &&
            block.get('type') !== BLOCK_TYPE_TARGET
        ) {
            return block;
        }
    }
    return false;
}

export default function*() {
    yield takeEvery(MOVE, moveBlocks);
    yield takeEvery(UNDO, undo);
    yield takeEvery(RESTART, restartLevel);
}
