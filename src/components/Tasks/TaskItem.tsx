import React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { TaskItemText } from "../../constants/text";
import "../../style/App.css";
interface Props {
  todoElem: ITodo;
  removeTodo: (todo: ITodo) => void;
  completeTodo: (todo: ITodo) => void;
}
const TaskItem: React.FC<Props> = ({ todoElem, removeTodo, completeTodo }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteTodo = React.useCallback(
    (todo: ITodo) => dispatch(removeTodo(todo)),
    [dispatch, removeTodo]
  );
  const updateTodo = React.useCallback(
    (todo: ITodo) => dispatch(completeTodo(todo)),
    [dispatch, completeTodo]
  );
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <h6>
        <b>{todoElem.name}:</b> {todoElem.description} -{" "}
        <span className="span" onClick={() => deleteTodo(todoElem)}>
          {TaskItemText.DELETE}
        </span>
      </h6>

      <span
        className={`badge ${
          todoElem.isCompleted ? "badge-success" : "badge-danger"
        } badge-pill click`}
        onClick={(e) => {
          e.preventDefault();
          console.log(todoElem);
          updateTodo(todoElem);
        }}
      >
        {todoElem.isCompleted
          ? TaskItemText.COMPLETE
          : TaskItemText.NOT_COMPLETE}
      </span>
    </li>
  );
};
export default TaskItem;
