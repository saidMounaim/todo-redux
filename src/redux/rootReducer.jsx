import { combineReducers } from "redux";
import { todosReducer } from "./TodoReducers";

export const rootReducers = combineReducers({
  todos: todosReducer,
});
