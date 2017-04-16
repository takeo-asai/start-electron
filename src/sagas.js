import { call, put, fork, take } from 'redux-saga/effects';
import 'babel-polyfill';

import * as Actions from './actions';
import * as API from './api';

function* promiseTestHandler() {
    while (true) {
        const action = yield take(Actions.PROMISETEST);
        const { payload, error } = yield call(API.test, 100);
        if (payload && !error) {
            yield put(Actions.test(payload));
        } else {
            yield put(Actions.test(error));
        }
    }
}

export default function* rootSaga() {
    yield fork(promiseTestHandler);
}
