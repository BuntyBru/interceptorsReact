import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            hey
          </Route>
          <Route path="/login">Login</Route>
          <Route path="/dashboard">dashboard</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
