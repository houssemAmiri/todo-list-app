import React from "react";
import TaskItem from "./TaskItem";
import { ListTasksText } from "../../constants/text";
import { removeTodo, completeTodo } from "../../store/actions/todoActions";

interface Props {
  todoList: ITodo[];
}
const TaskList: React.FC<Props> = ({ todoList }) => {
  return (
    <>
      <h2>{ListTasksText.TITLE}</h2>
      {todoList && todoList.length > 0 ? (
        <ul className="list-group">
          {todoList.map((todoElem, index) => (
            <TaskItem
              todoElem={todoElem}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
              key={index}
            />
          ))}
        </ul>
      ) : (
        <h3>{ListTasksText.EMPTY_LIST}</h3>
      )}
    </>
  );
};
export default TaskList;
