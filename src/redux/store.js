import {createStore, applyMiddleware, combineReducers} from "redux"
import promiseMiddleware from "redux-promise-middleware"
import userReducer from "./userReducer";
import prodReducer from './prodReducer';

const rootReducer = combineReducers({
        userReducer, prodReducer
    });

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))