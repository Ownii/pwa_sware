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
    id: 14,
    size: 5,
    possibleIn: 7,
    blocks: [
        {
            x: 4,
            y: 0,
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
            x: 0,
            y: 4,
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
            x: 4,
            y: 3,
            type: BLOCK_TYPE_TARGET,
            color: 'COLOR_BROWN'
        },
        {
            x: 0,
            y: 3,
            type: BLOCK_TYPE_TARGET,
            color: COLOR_PURPLE
        },
        {
            x: 1,
            y: 0,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_PURPLE
        },
        {
            x: 3,
            y: 0,
            type: BLOCK_TYPE_MOVE,
            color: 'COLOR_BROWN'
        },
        {
            x: 3,
            y: 2,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 3,
            y: 3,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        }
    ]
};
