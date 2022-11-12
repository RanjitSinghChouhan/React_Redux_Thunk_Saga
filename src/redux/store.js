import { legacy_createStore as createStore } from 'redux';
import rootReducer from './rootReducer';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagaUsers/sagaUserActions'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware))

export default store;

sagaMiddleware.run(rootSaga)