import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Dispatch } from "redux";

import AddTask from "../components/Tasks/AddTask";
import TaskList from "../components/Tasks/TaskList";
import { addTodo } from "../store/actions/todoActions";

const Tasks: React.FC = () => {
  const todos: ITodo[] = useSelector(
    (state: TodoState) => state.todos,
    shallowEqual
  );
  const dispatch: Dispatch<any> = useDispatch();
  const saveTodo = React.useCallback((todo: ITodo) => dispatch(addTodo(todo)), [
    dispatch,
  ]);
  return (
    <div className="container">
      <TaskList todoList={todos} />
      <AddTask saveTodo={saveTodo} />
    </div>
  );
};
export default Tasks;
