import {createBrowserHistory} from 'history';
import createSagaMiddleware from '@redux-saga/core';
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import sagas from './sagas';
//create middleware
const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();
export const store = createStore(
    reducers, applyMiddleware(sagaMiddleware)
    )
sagaMiddleware.run(sagas);



 
 