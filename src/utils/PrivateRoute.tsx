import React from "react";
import { Route, Redirect } from "react-router-dom";
interface Props {
  isAuthenticated: boolean;
  path: string;
  rest?: object;
}

const PrivateRoute: React.FC<Props> = ({
  isAuthenticated,
  children,
  path,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated && path === "/login" ? (
          <Redirect
            to={{
              pathname: "/tasks",
              state: { from: location },
            }}
          />
        ) : !isAuthenticated && path === "/login" ? (
          children
        ) : isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
