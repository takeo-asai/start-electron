import { call, put, fork, take } from 'redux-saga/effects';
import 'babel-polyfill';

import * as Actions from './actions';
import * as API from './api';

function* createAppHandler() {
    while (true) {
        const action = yield take(Actions.CREATE_APP);
        const { baseUrl } = action;
        const { error, clientId, clientSecret } = yield call(API.createApp, baseUrl);
        if (!error) {
            yield put(Actions.createAppDone(clientId, clientSecret));
        } else {
            yield put(Actions.getAuth(error));
        }
    }
}

export default function* rootSaga() {
    yield fork(createAppHandler);
}
