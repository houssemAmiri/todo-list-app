import React from "react";
import AddTask from "../components/Tasks/AddTask";
import TaskList from "../components/Tasks/TaskList";

const Tasks: React.FC = () => {
  return (
    <div className="container">
      <TaskList />
      <AddTask />
    </div>
  );
};
export default Tasks;
