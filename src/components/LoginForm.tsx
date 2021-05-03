import React from "react";
import { UseFormRegister, UseFormHandleSubmit, DeepMap } from "react-hook-form";

import { LoginFormText } from "../constants/text";

type Inputs = {
  email: string;
  password: string;
};

interface Props {
  errorShow: boolean;
  register: UseFormRegister<Inputs>;
  handleSubmit: UseFormHandleSubmit<Inputs>;
  errors: DeepMap<Inputs, {}>;
  onSubmit: (data: Inputs) => void;
}

const LoginForm: React.FC<Props> = ({
  errorShow,
  register,
  handleSubmit,
  errors,
  onSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errorShow && (
        <div className="alert alert-danger" role="alert">
          {LoginFormText.VERIFY}
        </div>
      )}
      <div className="form-group">
        <label>{LoginFormText.EMAIL_PLACEHOLDER}</label>
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder={LoginFormText.EMAIL_PLACEHOLDER}
          {...register("email", { required: true })}
        />
        {errors.email && <span>{LoginFormText.REQUIRED}</span>}
      </div>
      <div className="form-group">
        <label>{LoginFormText.PASSWORD_LABEL}</label>
        <input
          type="password"
          className="form-control"
          placeholder={LoginFormText.PASSWORD_PLACEHOLDER}
          {...register("password", { required: true })}
        />
        {errors.password && <span>{LoginFormText.REQUIRED}</span>}
      </div>

      <button type="submit" className="btn btn-primary">
        {LoginFormText.SUBMIT_BUTTON}
      </button>
    </form>
  );
};
export default LoginForm;
