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
    id: 18,
    size: 6,
    possibleIn: 10,
    blocks: [
        {
            x: 2,
            y: 1,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 1,
            y: 3,
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
            x: 3,
            y: 1,
            type: BLOCK_TYPE_TARGET,
            color: COLOR_RED
        },
        {
            x: 0,
            y: 1,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_RED
        },
        {
            x: 5,
            y: 1,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_BLUE
        },
        {
            x: 4,
            y: 2,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 2,
            y: 0,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 3,
            y: 4,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 4,
            y: 3,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 2,
            y: 4,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        }
    ]
};
