import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthenticationContext } from "../context/AuthenticationContext";
import Dashboard from "../components/Dashboard";

function AuthComps() {
  const { logout } = useContext(AuthenticationContext);

  return (
    <div>
      <button onClick={logout}>Logout</button>
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/">
            hey auth
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default AuthComps;
