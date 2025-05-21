import { thunk } from "redux-thunk";
import authReducer from "./auth/Reducer";

import  { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import coinReducer from "./coin/Reducer";

const rootReducer = combineReducers({
    auth:authReducer,
    coin:coinReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));