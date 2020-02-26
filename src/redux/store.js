import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools} from 'redux-devtools-extension'
import userReducer from './userReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    userReducer,
    cartReducer
})

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware)));