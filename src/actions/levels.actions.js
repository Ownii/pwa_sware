export const FINISH_LEVEL = 'FINISH_LEVEL';

export function finishLevel(moves) {
    return {
        type: FINISH_LEVEL,
        payload: moves
    };
}
