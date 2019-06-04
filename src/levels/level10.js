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
    id: 10,
    size: 5,
    possibleIn: 8,
    blocks: [
        {
            x: 0,
            y: 0,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_RED
        },
        {
            x: 1,
            y: 0,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_BLUE
        },
        {
            x: 2,
            y: 0,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_GREEN
        },
        {
            x: 3,
            y: 0,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_ORANGE
        },
        {
            x: 4,
            y: 0,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_PURPLE
        },
        {
            x: 0,
            y: 1,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_BROWN
        },
        {
            x: 4,
            y: 4,
            type: BLOCK_TYPE_TARGET,
            color: COLOR_RED
        },
        {
            x: 4,
            y: 3,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        }
    ]
};
