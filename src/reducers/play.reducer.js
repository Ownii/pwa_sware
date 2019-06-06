import { Map, fromJS, List } from 'immutable';
import { BLOCK_TYPE_MOVE, BLOCK_TYPE_TARGET } from '../utils/constants';
import { MOVE, PLAY_LEVEL, UNDO } from '../actions/play.actions';
const initialState = Map({
    level: undefined,
    moveHistory: List()
});

export default function(state = initialState, action) {
    switch (action.type) {
        case PLAY_LEVEL:
            return state
                .set('level', action.payload.level)
                .set('moveHistory', List());
        case MOVE:
            var { x, y } = action.payload;
            return move(state, x, y);
        case UNDO:
            var lastMove = state.get('moveHistory').pop();
            if (lastMove) {
                return move(state, lastMove[0] * -1, lastMove[1] * -1, false);
            }
            return state;
        default:
            return state;
    }
}

function move(state, stepX, stepY, addMove = true) {
    let level = fromJS(state.get('level').toJS());
    let moveHistory = fromJS(state.get('moveHistory').toJS());
    const blocks = level.get('blocks');
    let sortedBlocks = blocks.sort((a, b) => (b.get('x') - a.get('x')) * stepX);
    sortedBlocks = sortedBlocks.sort(
        (a, b) => (b.get('y') - a.get('y')) * stepY
    );
    let moved = false;
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
                moved = true;
            }
            sortedBlocks = sortedBlocks.set(i, block);
        }
    }
    level = level.set('blocks', sortedBlocks);
    if (moved) {
        if (addMove) {
            moveHistory = moveHistory.push([stepX, stepY]);
        }
    }
    return state.set('level', level).set('moveHistory', moveHistory);
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
