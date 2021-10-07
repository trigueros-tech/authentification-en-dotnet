import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import SigninCallback from "./components/SigninCallback";
import SignoutCallback from "./components/SignoutCallback";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/auth/signin">
          <SigninCallback />
        </Route>
        <Route path="/auth/signout">
          <SignoutCallback />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
