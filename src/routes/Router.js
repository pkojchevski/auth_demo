import React from "react";

import { Switch, Route } from "react-router-dom";

// import SignupPage from "../components/pages/SignupPage";
// import LoginPage from "../components/pages/LoginPage";
import SignupPageDialog from "../components/pages/SignupPageDialog";

import LoginPageDialog from "../components/pages/LoginPageDialog";

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={LoginPageDialog}></Route>
      <Route exact path="/signup" component={SignupPageDialog}></Route>
      <Route path="/login" component={LoginPageDialog}></Route>
    </Switch>
  );
}

export default Router;
