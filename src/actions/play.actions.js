import { fromJS } from 'immutable';

export const PLAY_LEVEL = 'PLAY_LEVEL';
export const MOVE = 'MOVE';
export const UNDO = 'UNDO';
export const RESTART = 'RESTART';

export function playLevel(level) {
    return {
        type: PLAY_LEVEL,
        payload: {
            level: fromJS(level.toJS())
        }
    };
}

export function restart() {
    return {
        type: RESTART
    };
}

export function undo() {
    return {
        type: UNDO
    };
}

export function move(x, y) {
    return {
        type: MOVE,
        payload: {
            x,
            y
        }
    };
}

export function moveRight() {
    return move(1, 0);
}

export function moveLeft() {
    return move(-1, 0);
}

export function moveUp() {
    return move(0, -1);
}

export function moveDown() {
    return move(0, 1);
}
