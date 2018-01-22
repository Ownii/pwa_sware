import { Map, List } from 'immutable';
import {
    REQUEST_USERS,
    REQUEST_USERS_SUCCEEDED,
    REQUEST_USERS_FAILED
} from '../actions/users.actions';

const initialState = Map({ isLoading: false, users: List() });

export default function(state = initialState, action) {
    switch (action.type) {
        case REQUEST_USERS:
            return state.set('isLoading', true);

        case REQUEST_USERS_SUCCEEDED:
            return state.set('isLoading', false).set('users', action.users);

        case REQUEST_USERS_FAILED:
            return state.set('isLoading', false);

        default:
            return state;
    }
}
