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

function* getTokenHandler() {
    while (true) {
        const action = yield take(Actions.GET_TOKEN);
        const { baseUrl, clientId, clientSecret, code } = action;
        const mstdn = yield call(API.getToken, baseUrl, clientId, clientSecret, code);
        console.log(mstdn);
        yield put(Actions.getAuth(clientId));
        /* if (!error) {
            yield put(Actions.getAuth(clientId));
        } else {
            yield put(Actions.getAuth(error));
        }*/
    }
}

export default function* rootSaga() {
    yield fork(createAppHandler);
    yield fork(getTokenHandler);
}
