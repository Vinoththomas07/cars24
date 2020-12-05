import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {reducers} from './reducer'

export function configureStore(initialState = {}) {
    const store = createStore(reducers, initialState, applyMiddleware(thunk));
    return store;
}

export const store = configureStore();