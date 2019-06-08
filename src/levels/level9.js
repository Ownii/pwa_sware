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
    id: 9,
    size: 5,
    possibleIn: 21,
    blocks: [
        {
            x: 1,
            y: 1,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 2,
            y: 2,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 3,
            y: 3,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 1,
            y: 2,
            type: BLOCK_TYPE_TARGET,
            color: COLOR_RED
        },
        {
            x: 2,
            y: 3,
            type: BLOCK_TYPE_TARGET,
            color: COLOR_BLUE
        },
        {
            x: 3,
            y: 4,
            type: BLOCK_TYPE_TARGET,
            color: COLOR_GREEN
        },
        {
            x: 4,
            y: 4,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 4,
            y: 3,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_GREEN
        },
        {
            x: 3,
            y: 2,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_BLUE
        },
        {
            x: 2,
            y: 1,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_RED
        },
        {
            x: 3,
            y: 1,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 1,
            y: 3,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        }
    ]
};
