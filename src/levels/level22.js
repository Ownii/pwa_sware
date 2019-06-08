import {
    BLOCK_TYPE_MOVE,
    BLOCK_TYPE_TARGET,
    BLOCK_TYPE_WALL,
    COLOR_BLUE,
    COLOR_GREEN,
    COLOR_GREY,
    COLOR_ORANGE,
    COLOR_RED
} from '../utils/constants';

export default {
    id: 22,
    size: 5,
    possibleIn: 5,
    blocks: [
        {
            x: 4,
            y: 0,
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
            x: 0,
            y: 4,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 0,
            y: 0,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 1,
            y: 0,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_RED
        },
        {
            x: 3,
            y: 4,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_ORANGE
        },
        {
            x: 0,
            y: 1,
            type: BLOCK_TYPE_TARGET,
            color: COLOR_RED
        },
        {
            x: 0,
            y: 3,
            type: BLOCK_TYPE_TARGET,
            color: COLOR_BLUE
        },
        {
            x: 2,
            y: 2,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 3,
            y: 0,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_GREEN
        },
        {
            x: 1,
            y: 4,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_BLUE
        }
    ]
};
