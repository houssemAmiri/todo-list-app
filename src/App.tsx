import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Tasks from "./pages/Tasks";
import Header from "./components/Header";
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
          <Route path="/" exact={true}>
            <Login login={login} />
          </Route>
          <Route path="/tasks">
            <Tasks />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
