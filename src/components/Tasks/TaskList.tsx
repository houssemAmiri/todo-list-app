import React from "react";

import { ListTasksText } from "../../constants/text";
interface Props {
  todoList: ITodo[];
}
const TaskList: React.FC<Props> = ({ todoList }) => {
  return (
    <>
      <h2>{ListTasksText.TITLE}</h2>
      <ul className="list-group">
        {todoList.map((todo) => (
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <h6>
              <b>{todo.name}:</b> {todo.description}
            </h6>
            <span
              className={`badge ${
                todo.isCompleted ? "badge-success" : "badge-danger"
              } badge-pill`}
            >
              {todo.isCompleted ? `Complète` : `Non Complete`}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};
export default TaskList;
