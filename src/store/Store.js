import { combineReducers } from "redux";
import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";


export const Store = createStore(
    combineReducers({

    }),
    {},
    applyMiddleware(thunk)
);