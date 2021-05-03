import * as actionTypes from "./action-types/todo-actions";
export function addTodo(todo: ITodo) {
  const action: TodoAction = {
    type: actionTypes.ADD_TODO,
    todo,
  };

  return action;
}

export function removeTodo(todo: ITodo) {
  const action: TodoAction = {
    type: actionTypes.DELETE_TODO,
    todo,
  };
  return action;
}

export function completeTodo(todo: ITodo) {
  const action: TodoAction = {
    type: actionTypes.COMPLETE_TODO,
    todo,
  };
  return action;
}
