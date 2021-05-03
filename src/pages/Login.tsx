import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import LoginForm from "../components/LoginForm";

import { user } from "../constants/env";

import "../style/App.css";

type Inputs = {
  email: string;
  password: string;
};
const Login: React.FC = () => {
  const [errorShow, setErrorShow] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  let history = useHistory();

  const onSubmit = (data: Inputs) => {
    console.log(data);
    if (data.email === user.email && data.password === user.password) {
      setErrorShow(false);
      history.push("/tasks");
    } else {
      setErrorShow(true);
    }
  };
  return (
    <div className="form-center">
      <LoginForm
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        errorShow={errorShow}
        onSubmit={onSubmit}
      />
    </div>
  );
};
export default Login;
