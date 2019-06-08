import { Map } from 'immutable';
import { FINISH_LEVEL } from '../actions/levels.actions';
import allLevels from '../levels/allLevels';

const initialState = Map({
    levels: allLevels,
    completions: Map({})
});

export default function(state = initialState, action) {
    if (action.type === FINISH_LEVEL) {
        let { level, moves } = action.payload;
        let best = state.get('completions').get('' + level.get('id'));
        if (!best || moves < best) {
            return state.set(
                'completions',
                state.get('completions').set('' + level.get('id'), moves)
            );
        }
    }
    return state;
}
