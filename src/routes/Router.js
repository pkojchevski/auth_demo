import React from "react";

import { Switch, Route } from "react-router-dom";

import AuthPage from "../components/pages/AuthPage";



function Router() {
  return (
    <Switch>
      <Route exact path="/" component={AuthPage}></Route>
      <Route exact path="/login" component={AuthPage}></Route>
    </Switch>
  );
}

export default Router;
