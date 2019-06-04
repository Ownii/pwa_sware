import {
    BLOCK_TYPE_MOVE,
    BLOCK_TYPE_TARGET,
    BLOCK_TYPE_WALL,
    COLOR_BLUE,
    COLOR_GREY,
    COLOR_LIME,
    COLOR_ORANGE,
    COLOR_RED,
    COLOR_GREEN,
    COLOR_PURPLE,
    COLOR_BROWN
} from '../utils/constants';

export default {
    id: 19,
    size: 8,
    possibleIn: 8,
    blocks: [
        {
            x: 7,
            y: 0,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_GREEN
        },
        {
            x: 1,
            y: 3,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 7,
            y: 2,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 6,
            y: 7,
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
            x: 5,
            y: 2,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_BLUE
        },
        {
            x: 2,
            y: 1,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 7,
            y: 7,
            type: BLOCK_TYPE_TARGET,
            color: COLOR_GREEN
        },
        {
            x: 3,
            y: 0,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_PURPLE
        },
        {
            x: 3,
            y: 7,
            type: BLOCK_TYPE_TARGET,
            color: COLOR_PURPLE
        },
        {
            x: 0,
            y: 7,
            type: BLOCK_TYPE_TARGET,
            color: COLOR_ORANGE
        },
        {
            x: 1,
            y: 7,
            type: BLOCK_TYPE_TARGET,
            color: COLOR_BLUE
        },
        {
            x: 2,
            y: 3,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_BROWN
        },
        {
            x: 0,
            y: 6,
            type: BLOCK_TYPE_TARGET,
            color: COLOR_BROWN
        },
        {
            x: 0,
            y: 1,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_ORANGE
        }
    ]
};
