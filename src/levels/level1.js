import { List } from 'immutable/dist/immutable';
import {
    BLOCK_TYPE_MOVE,
    BLOCK_TYPE_TARGET,
    BLOCK_TYPE_WALL,
    COLOR_BLUE,
    COLOR_GREY,
    COLOR_LIME,
    COLOR_ORANGE,
    COLOR_RED
} from '../utils/constants';

export default {
    id: 1,
    possibleIn: 9,
    size: 7,
    blocks: List.of(
        {
            type: BLOCK_TYPE_MOVE,
            color: COLOR_RED,
            x: 0,
            y: 0
        },
        {
            type: BLOCK_TYPE_MOVE,
            color: COLOR_LIME,
            x: 6,
            y: 0
        },
        {
            type: BLOCK_TYPE_MOVE,
            color: COLOR_BLUE,
            x: 0,
            y: 6
        },
        {
            type: BLOCK_TYPE_MOVE,
            color: COLOR_ORANGE,
            x: 6,
            y: 6
        },
        {
            type: BLOCK_TYPE_TARGET,
            color: COLOR_RED,
            x: 2,
            y: 2
        },
        {
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY,
            x: 2,
            y: 1
        },
        {
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY,
            x: 1,
            y: 2
        },
        {
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY,
            x: 4,
            y: 1
        },
        {
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY,
            x: 5,
            y: 2
        },
        {
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY,
            x: 1,
            y: 4
        },
        {
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY,
            x: 2,
            y: 5
        },
        {
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY,
            x: 4,
            y: 5
        },
        {
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY,
            x: 5,
            y: 4
        },
        {
            type: BLOCK_TYPE_WALL,
            color: COLOR_GREY,
            x: 3,
            y: 3
        }
    )
};
