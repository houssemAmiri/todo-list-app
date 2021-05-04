import { createStore, Store } from "redux";

import todoReducer from "./reducers/todoReducer";
import throttle from "lodash/throttle";

import { loadState, saveState } from "../utils/localStrorage";

const persistedState = loadState();
const store: Store<TodoState, TodoAction> & {
  dispatch: DispatchType;
} = createStore(todoReducer, persistedState);
/*
store.subscribe(
  throttle(() => {
    saveState({
      todos: store.getState().todos,
    });
  }, 1000)
);
*/
store.subscribe(
  throttle(() => {
    saveState({
      todos: store.getState().todos,
    });
  }, 1000)
);
export default store;
