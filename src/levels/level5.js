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
    id: 5,
    size: 7,
    possibleIn: 10,
    blocks: [
        {
            x: 2,
            y: 3,
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
            x: 3,
            y: 3,
            type: BLOCK_TYPE_TARGET,
            color: COLOR_ORANGE
        },
        {
            x: 3,
            y: 1,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_ORANGE
        },
        {
            x: 2,
            y: 1,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 4,
            y: 1,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 2,
            y: 0,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_GREEN
        },
        {
            x: 4,
            y: 0,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_PURPLE
        },
        {
            x: 2,
            y: 5,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 0,
            y: 2,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 6,
            y: 3,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 3,
            y: 0,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_RED
        }
    ]
};
