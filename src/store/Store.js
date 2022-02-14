import { combineReducers } from "redux";
import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducers";


export const Store = createStore(
    combineReducers({
        user:userReducer
    }),
    {},
    applyMiddleware(thunk)
);