export const FINISH_LEVEL = 'FINISH_LEVEL';

export function finishLevel(level, moves) {
    return {
        type: FINISH_LEVEL,
        payload: {
            level,
            moves
        }
    };
}
