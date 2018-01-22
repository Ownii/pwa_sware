import { fork } from 'redux-saga/effects';
import users from './users.sagas';

export default function*() {
    yield fork(users);
}
