import { fromJS } from 'immutable';

export const PLAY_LEVEL = 'PLAY_LEVEL';
export const MOVE = 'MOVE';
export const UNDO = 'UNDO';
export const RESTART = 'RESTART';
export const MOVED = 'MOVED';
export const ADD_TO_MOVE_HISTORY = 'ADD_TO_MOVE_HISTORY';
export const GO_TO_MENU = 'GO_TO_MENU';

export const REMOVE_LAST_FROM_MOVEHISTORY = 'REMOVE_LAST_FROM_MOVEHISTORY';

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

export function move(x, y, addToHistory = true) {
    return {
        type: MOVE,
        payload: {
            x,
            y,
            addToHistory
        }
    };
}

export function removeLastFromMoveHistory() {
    return {
        type: REMOVE_LAST_FROM_MOVEHISTORY
    };
}

export function moved(level, move) {
    return {
        type: MOVED,
        payload: {
            level,
            move
        }
    };
}

export function addToMoveHistory(move) {
    return {
        type: ADD_TO_MOVE_HISTORY,
        payload: {
            move
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

export function goToMenu() {
    return {
        type: GO_TO_MENU
    };
}
