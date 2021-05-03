import React from "react";

import { AddTaskText } from "../../constants/text";

const AddTask: React.FC = () => {
  return (
    <div className="mt-5">
      <h2>{AddTaskText.TITLE}</h2>
      <form>
        <div className="form-row align-items-center">
          <div className="col-auto">
            <label>{AddTaskText.NAME_TASK_LABEL}</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-auto">
            <label>{AddTaskText.NAME_TASK_LABEL}</label>
            <input type="text" className="form-control" />
          </div>

          <div className="col-auto">
            <button type="submit" className="btn btn-primary mt-4">
              Ajouter une tache
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddTask;
