import { Map, List } from 'immutable';
import { FINISH_LEVEL } from '../actions/levels.actions';
import {
    BLOCK_TYPE_MOVE,
    COLOR_RED,
    BLOCK_TYPE_TARGET,
    BLOCK_TYPE_WALL,
    COLOR_GREY
} from '../utils/constants';

const initialState = Map({
    levels: List.of(
        Map({
            id: 1,
            possibleIn: 10,
            size: 5,
            blocks: List.of(
                {
                    type: BLOCK_TYPE_MOVE,
                    color: COLOR_RED,
                    x: 0,
                    y: 0
                },
                {
                    type: BLOCK_TYPE_TARGET,
                    color: COLOR_RED,
                    x: 4,
                    y: 4
                },
                {
                    type: BLOCK_TYPE_WALL,
                    color: COLOR_GREY,
                    x: 4,
                    y: 3
                },
                {
                    type: BLOCK_TYPE_WALL,
                    color: COLOR_GREY,
                    x: 0,
                    y: 4
                }
            )
        })
    )
});

export default function(state = initialState, action) {
    switch (action.type) {
        case FINISH_LEVEL:
            return state;

        default:
            return state;
    }
}
