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
    COLOR_PURPLE
} from '../utils/constants';

export default {
    id: 13,
    size: 7,
    possibleIn: 5,
    blocks: [
        {
            x: 3,
            y: 2,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_ORANGE
        },
        {
            x: 3,
            y: 1,
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
            x: 4,
            y: 4,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_PURPLE
        },
        {
            x: 5,
            y: 6,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 6,
            y: 1,
            type: BLOCK_TYPE_MOVE,
            color: 'COLOR_BROWN'
        },
        {
            x: 0,
            y: 6,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_GREEN
        },
        {
            x: 0,
            y: 5,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 3,
            y: 6,
            type: BLOCK_TYPE_TARGET,
            color: COLOR_PURPLE
        },
        {
            x: 6,
            y: 6,
            type: BLOCK_TYPE_TARGET,
            color: 'COLOR_BROWN'
        },
        {
            x: 4,
            y: 6,
            type: BLOCK_TYPE_TARGET,
            color: COLOR_GREEN
        },
        {
            x: 5,
            y: 4,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_BLUE
        },
        {
            x: 6,
            y: 5,
            type: BLOCK_TYPE_TARGET,
            color: COLOR_ORANGE
        },
        {
            x: 3,
            y: 0,
            type: BLOCK_TYPE_TARGET,
            color: COLOR_BLUE
        }
    ]
};
