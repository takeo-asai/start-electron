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
            // TODO: error handling
            yield put(Actions.createAppDone(error, clientId));
        }
    }
}

function* getTokenHandler() {
    while (true) {
        const action = yield take(Actions.GET_TOKEN);
        const { baseUrl, clientId, clientSecret, code } = action;
        const { token, error } = yield call(API.getToken, baseUrl, clientId, clientSecret, code);
        console.log("token, error");
        console.log(token, error);
        if (!error) {
            yield put(Actions.getTokenDone(token));
        } else {
            // TODO: error handling
            yield put(Actions.getTokenDone(error));
        }
    }
}

export default function* rootSaga() {
    yield fork(createAppHandler);
    yield fork(getTokenHandler);
}
