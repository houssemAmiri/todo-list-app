import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";
import Header from "./components/Header";
function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/login" exact={true}>
            <Login />
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
