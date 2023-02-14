/* eslint-disable prettier/prettier */
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReduser from '../reducers';

export const Store = createStore(
    rootReduser,
    applyMiddleware(thunk)
);
