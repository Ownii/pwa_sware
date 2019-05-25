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
    id: 27,
    size: 6,
    possibleIn: 12,
    blocks: [
        {
            x: 2,
            y: 2,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 3,
            y: 2,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 2,
            y: 3,
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
            y: 1,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 1,
            y: 4,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_RED
        },
        {
            x: 4,
            y: 1,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_GREEN
        },
        {
            x: 2,
            y: 1,
            type: BLOCK_TYPE_TARGET,
            color: COLOR_RED
        },
        {
            x: 0,
            y: 5,
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
            x: 1,
            y: 5,
            type: BLOCK_TYPE_MOVE,
            color: 'COLOR_BROWN'
        },
        {
            x: 0,
            y: 4,
            type: BLOCK_TYPE_TARGET,
            color: 'COLOR_BROWN'
        }
    ]
};
