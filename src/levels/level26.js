import {
    BLOCK_TYPE_MOVE,
    BLOCK_TYPE_TARGET,
    BLOCK_TYPE_WALL,
    COLOR_BLUE,
    COLOR_GREEN,
    COLOR_GREY,
    COLOR_RED
} from '../utils/constants';

export default {
    id: 26,
    size: 7,
    possibleIn: 11,
    blocks: [
        {
            x: 6,
            y: 0,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_BLUE
        },
        {
            x: 0,
            y: 2,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 6,
            y: 1,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 5,
            y: 3,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 1,
            y: 4,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 4,
            y: 5,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 4,
            y: 6,
            type: BLOCK_TYPE_TARGET,
            color: COLOR_BLUE
        },
        {
            x: 0,
            y: 0,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_GREEN
        },
        {
            x: 6,
            y: 2,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_RED
        },
        {
            x: 5,
            y: 6,
            type: BLOCK_TYPE_TARGET,
            color: COLOR_RED
        },
        {
            x: 6,
            y: 6,
            type: BLOCK_TYPE_TARGET,
            color: COLOR_GREEN
        }
    ]
};
