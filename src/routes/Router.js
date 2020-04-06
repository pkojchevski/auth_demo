import React from "react";

import { Switch, Route } from "react-router-dom";

import LoginPage from "../components/pages/LoginPage";
import SignupPage from "../components/pages/SignupPage";


function Router({ handleClose }) {
  return (
    <Switch>
      <Route exact path="/" render={() => <LoginPage handleClose={handleClose} />} />
      <Route exact path="/login" render={() => <LoginPage handleClose={handleClose} />} />
      <Route exact path="/signup" render={() => <SignupPage handleClose={handleClose} />} />
    </Switch>
  );
}

export default Router;
