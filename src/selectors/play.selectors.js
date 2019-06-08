import { BLOCK_TYPE_TARGET } from '../utils/constants';
import { getLevelById } from './levels.selectors';

export const isLevelCompleted = state => {
    const level = getCurrentLevel(state);
    const blocks = level.get('blocks');
    for (let i = 0; i < blocks.size; i++) {
        let block = blocks.get(i);
        let blockAt = getBlockAt(block.get('x'), block.get('y'))(state);
        if (
            block.get('type') === BLOCK_TYPE_TARGET &&
            (!blockAt || blockAt.get('color') !== block.get('color'))
        ) {
            return false;
        }
    }
    return true;
};

export const getCurrentLevel = state => {
    return state.play.get('level');
};

export const getBlockAt = (x, y, _blocks) => state => {
    const level = getCurrentLevel(state);
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
};

export const getNextLevel = state => {
    const currentLevel = getCurrentLevel(state);
    return getLevelById(currentLevel.get('id') + 1)(state);
};
