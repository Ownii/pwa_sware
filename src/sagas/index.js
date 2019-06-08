import { fork } from 'redux-saga/effects';
import play from './play.sagas';

export default function*() {
    yield fork(play);
}
