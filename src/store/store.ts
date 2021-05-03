import { createStore, Store } from "redux";
import todoReducer from "./reducers/todoReducer";
const store: Store<TodoState, TodoAction> & {
  dispatch: DispatchType;
} = createStore(todoReducer);

export default store;
