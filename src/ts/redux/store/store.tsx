import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import rootReducer from '../reducers/reducer';
import rootSaga from '../sagas/saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
// const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
