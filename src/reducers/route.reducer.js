import { CHANGE_ROUTE } from '../actions/route.action';
import { Map } from 'immutable';

export const initialState = Map({
    activePath: '/'
});

export default function(state = initialState, action) {
    switch (action.type) {
        case CHANGE_ROUTE:
            return state.set('activePath', action.path);

        default:
            return state;
    }
}
