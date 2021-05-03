import { createStore, Store, applyMiddleware } from "redux";
import { loadState, saveState } from "../utils/localStrorage";

import todoReducer from "./reducers/todoReducer";
const persistedState = loadState();

const store: Store<TodoState, TodoAction> & {
  dispatch: DispatchType;
} = createStore(todoReducer);

export default store;
