import React from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import { AddTaskText, LoginFormText } from "../../constants/text";

type Inputs = {
  name: string;
  description: string;
};

interface Props {
  saveTodo: (todo: ITodo) => TodoAction;
}
const AddTask: React.FC<Props> = ({ saveTodo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => {
    const todo = {
      id: uuidv4(),
      name: data.name,
      description: data.description,
      isCompleted: false,
    };
    saveTodo(todo);
  };

  return (
    <div className="mt-5">
      <h2>{AddTaskText.TITLE}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row align-items-center">
          <div className="col-auto">
            <label>{AddTaskText.NAME_TASK_LABEL}</label>
            <input
              type="text"
              className="form-control"
              {...register("name", { required: true })}
            />
            {errors.name && <span>{LoginFormText.REQUIRED}</span>}
          </div>
          <div className="col-auto">
            <label>{AddTaskText.DESCRIPTION_TASK_LABEL}</label>
            <input
              type="text"
              className="form-control"
              {...register("description", { required: true })}
            />
            {errors.description && <span>{LoginFormText.REQUIRED}</span>}
          </div>

          <div className="col-auto">
            <button type="submit" className="btn btn-primary mt-4">
              {AddTaskText.BUTTON}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddTask;
