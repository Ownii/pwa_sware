import { fetchUsers } from '../users.sagas';
import {
    REQUEST_USERS,
    requestUsersSucceeded
} from '../../actions/users.actions';
import { List, Map } from 'immutable';
import { call, put } from 'redux-saga/effects';
import get from '../../api/get';

describe('sagas/users', () => {
    describe('fetchUsers', () => {
        const action = { type: REQUEST_USERS };
        const users = List(Map({ id: 1, name: 'user' }));
        let saga;

        beforeEach(() => {
            saga = fetchUsers(action);
        });

        test('calls call with get', () => {
            const result = timeTravel(saga, 1);
            expect(result).toEqual(call(get, `${API_TARGET}api/users`));
        });

        test('calls put with requestUsersSucceeded', () => {
            const result = timeTravel(saga, 2, users);
            expect(result).toEqual(put(requestUsersSucceeded(users)));
        });
    });
});
