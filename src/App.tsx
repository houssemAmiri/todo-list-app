import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "./pages/Login";
import Tasks from "./pages/Tasks";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./utils/PrivateRoute";
function App() {
  const [isAuthentificated, setIsAuthentificated] = React.useState<boolean>(
    localStorage.getItem("id_token")
      ? true
      : sessionStorage.getItem("id_token")
      ? true
      : false
  );

  const login = () => {
    localStorage.setItem("id_token", "this_is_token");
    setIsAuthentificated(true);
  };
  const logout = () => {
    localStorage.removeItem("id_token");
    setIsAuthentificated(false);
  };
  return (
    <div>
      <Router>
        <Header logout={logout} isAuthentificated={isAuthentificated} />

        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return isAuthentificated ? (
                <Redirect to="/tasks" />
              ) : (
                <Redirect to="/login" />
              );
            }}
          />
          <PrivateRoute path="/login" isAuthenticated={isAuthentificated}>
            <Login login={login} />
          </PrivateRoute>
          <PrivateRoute isAuthenticated={isAuthentificated} path="/tasks">
            <Tasks />
          </PrivateRoute>
          <Route path="/404">
            <NotFound />
          </Route>
          <Redirect to="/404" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
