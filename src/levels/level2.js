import {
    BLOCK_TYPE_MOVE,
    BLOCK_TYPE_TARGET,
    BLOCK_TYPE_WALL,
    COLOR_GREY,
    COLOR_RED
} from '../utils/constants';

export default {
    id: 2,
    size: 5,
    possibleIn: 4,
    blocks: [
        {
            x: 0,
            y: 0,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_RED
        },
        {
            x: 4,
            y: 4,
            type: BLOCK_TYPE_TARGET,
            color: COLOR_RED
        },
        {
            x: 3,
            y: 4,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        },
        {
            x: 4,
            y: 0,
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY
        }
    ]
};
