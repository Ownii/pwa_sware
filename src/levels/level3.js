import {
    BLOCK_TYPE_MOVE,
    BLOCK_TYPE_TARGET,
    BLOCK_TYPE_WALL,
    COLOR_GREEN,
    COLOR_GREY,
    COLOR_RED
} from '../utils/constants';

export default {
    id: 3,
    size: 5,
    possibleIn: 5,
    blocks: [
        {
            x: 1,
            y: 0,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_RED
        },
        {
            x: 4,
            y: 4,
            type: BLOCK_TYPE_TARGET,
            color: COLOR_RED
        },
        {
            x: 3,
            y: 4,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 4,
            y: 0,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 0,
            y: 0,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_GREEN
        },
        {
            x: 0,
            y: 4,
            type: BLOCK_TYPE_TARGET,
            color: COLOR_GREEN
        }
    ]
};
