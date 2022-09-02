import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { todosReducer } from "./todosReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { rowsReducer } from "./rowsReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  selectedRows: rowsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));
