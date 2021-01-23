import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../components/Login";

function Unauth() {
  return (
    <div>
      <Login />
      <Router>
        <Switch>
          <Route exact path="/">
            hey unauth
          </Route>
          <Route path="/login"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Unauth;
