import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import rootSaga from './sagas';
import Reducers from './reducers';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        Reducers,
        applyMiddleware(
            sagaMiddleware, //createLogger()
        )
    );
    sagaMiddleware.run(rootSaga);
    return store;
};
