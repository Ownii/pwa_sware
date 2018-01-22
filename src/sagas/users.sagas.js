import { call, put, takeEvery } from 'redux-saga/effects';
import get from '../api/get';
import {
    REQUEST_USERS,
    requestUsersSucceeded,
    requestUsersFailed
} from '../actions/users.actions';
export function* fetchUsers() {
    try {
        const users = yield call(get, `${API_TARGET}api/users`);
        yield put(requestUsersSucceeded(users));
    } catch (ex) {
        yield put(requestUsersFailed());
    }
}

export default function*() {
    yield takeEvery(REQUEST_USERS, fetchUsers);
}
