import { Map, List } from 'immutable';
import {
    ADD_TO_MOVE_HISTORY,
    GO_TO_MENU,
    MOVED,
    PLAY_LEVEL,
    REMOVE_LAST_FROM_MOVEHISTORY
} from '../actions/play.actions';
const initialState = Map({
    level: undefined,
    moveHistory: List()
});

export default function(state = initialState, action) {
    switch (action.type) {
        case PLAY_LEVEL:
            return state
                .set('level', action.payload.level)
                .set('moveHistory', List());
        case GO_TO_MENU:
            return initialState;
        case ADD_TO_MOVE_HISTORY:
            return state.set(
                'moveHistory',
                state.get('moveHistory').push(action.payload.move)
            );
        case REMOVE_LAST_FROM_MOVEHISTORY:
            return state.set('moveHistory', state.get('moveHistory').pop());
        case MOVED:
            return state.set('level', action.payload.level);
        default:
            return state;
    }
}
