import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {
  offlineMiddleware,
  suspendSaga,
  consumeActionMiddleware,
} from 'redux-offline-queue';
import reducer from './reducer';
import sagas from './sagas';

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(offlineMiddleware());
middlewares.push(suspendSaga(sagaMiddleware));
middlewares.push(consumeActionMiddleware());

const middleware = applyMiddleware(...middlewares);

const store = createStore(reducer, middleware);

sagaMiddleware.run(sagas);

export default store;
