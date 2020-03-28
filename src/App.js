import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import SignupPage from "./components/pages/SignupPage";
import LoginPage from "./components/pages/LoginPage";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={LoginPage}></Route>
        <Route exact path="/signup" component={SignupPage}></Route>
        <Route path="/login" component={LoginPage}></Route>
      </Switch>
    </Fragment>
  );
}

export default App;
