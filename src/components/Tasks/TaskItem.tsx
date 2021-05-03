import React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import "../../style/App.css";
interface Props {
  todoElem: ITodo;
  removeTodo: (article: ITodo) => void;
}
const TaskItem: React.FC<Props> = ({ todoElem, removeTodo }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteTodo = React.useCallback(
    (todo: ITodo) => dispatch(removeTodo(todo)),
    [dispatch, removeTodo]
  );
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <h6>
        <b>{todoElem.name}:</b> {todoElem.description} -{" "}
        <span className="span" onClick={() => deleteTodo(todoElem)}>
          Supprimer
        </span>
      </h6>

      <span
        className={`badge ${
          todoElem.isCompleted ? "badge-success" : "badge-danger"
        } badge-pill`}
      >
        {todoElem.isCompleted ? `Complète` : `Non Complete`}
      </span>
    </li>
  );
};
export default TaskItem;
