import { call, put, fork, take } from 'redux-saga/effects';
import 'babel-polyfill';

import * as Actions from './actions';
import * as API from './api';

function* promiseTestHandler() {
    while (true) {
        const action = yield take(Actions.PROMISETEST);
        const { payload, error } = yield call(API.test, 100);
        if (payload && !error) {
            yield put(Actions.getAuth(payload));
        } else {
            yield put(Actions.getAuth(error));
        }
    }
}

function* createAppHandler() {
    while (true) {
        const action = yield take(Actions.CREATE_APP);
        const { baseUrl } = action;
        const { error, url, clientId, clientSecret } = yield call(API.createApp, baseUrl);
        if (!error) {
            yield put(Actions.createAppDone(url, clientId, clientSecret));
        } else {
            yield put(Actions.getAuth(error));
        }
    }
}

export default function* rootSaga() {
    yield fork(createAppHandler);

    yield fork(promiseTestHandler);
}
