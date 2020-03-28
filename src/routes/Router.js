import React from "react";

import { Switch, Route } from "react-router-dom";

import SignupPage from "../components/pages/SignupPage";
import LoginPage from "../components/pages/LoginPage";

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage}></Route>
      <Route exact path="/signup" component={SignupPage}></Route>
      <Route path="/login" component={LoginPage}></Route>
    </Switch>
  );
}

export default Router;
