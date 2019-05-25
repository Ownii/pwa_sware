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
    id: 1,
    size: 3,
    possibleIn: 2,
    blocks: [
        {
            x: 0,
            y: 0,
            type: BLOCK_TYPE_MOVE,
            color: COLOR_RED
        },
        {
            x: 2,
            y: 2,
            type: BLOCK_TYPE_TARGET,
            color: COLOR_RED
        }
    ]
};
