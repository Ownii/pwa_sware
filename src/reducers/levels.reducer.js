import { Map } from 'immutable';
import { FINISH_LEVEL } from '../actions/levels.actions';
import allLevels from '../levels/allLevels';

const initialState = Map({
    levels: allLevels
});

export default function(state = initialState, action) {
    switch (action.type) {
        case FINISH_LEVEL:
            return state;

        default:
            return state;
    }
}
