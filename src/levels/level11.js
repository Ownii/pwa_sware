import {
    BLOCK_TYPE_MOVE,
    BLOCK_TYPE_TARGET,
    BLOCK_TYPE_WALL,
    COLOR_BLUE,
    COLOR_GREEN,
    COLOR_GREY,
    COLOR_PURPLE
} from '../utils/constants';

export default {
    id: 11,
    size: 5,
    possibleIn: 15,
    blocks: [
        {
            x: 0,
            y: 2,
            type: BLOCK_TYPE_TARGET,
            color: COLOR_BLUE
        },
        {
            x: 0,
            y: 1,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 4,
            y: 4,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 3,
            y: 2,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_GREEN
        },
        {
            x: 1,
            y: 2,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 4,
            y: 3,
            type: BLOCK_TYPE_TARGET,
            color: COLOR_GREEN
        },
        {
            x: 1,
            y: 0,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_BLUE
        },
        {
            x: 0,
            y: 0,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_PURPLE
        },
        {
            x: 3,
            y: 3,
            type: BLOCK_TYPE_TARGET,
            color: COLOR_PURPLE
        }
    ]
};
