import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { modalReducer } from "./modalReducer";
import {userReducer} from './userReducer'


const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunk));
