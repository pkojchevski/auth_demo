import React, { useState, useEffect, Fragment } from "react";



import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Login from "../organisms/Login";
import Signup from "../organisms/Signup";
import SignupTitle from "../organisms/SignupTitle";
import LoginTitle from "../organisms/LoginTitle";
import Popup from '../organisms/Popup';


// page styling, positioning atoms on layout
const useStyles = makeStyles(theme => ({
  dialog: {
    height: "520px",
    position: "relative"
  },
  gridTitle: {
    background: "#2874f0",
    padding: "40px 35px",
    color: "white",
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px'
  },
  paper: {
    overflowY: "unset"
  }
}));


function AuthPage() {
  const classes = useStyles();
  let authUI;
  // set open property to open/close dialog
  const [open, setOpen] = useState(false);

  // set state for LoginUI/ SignupUI
  const [isLogin, setIsLogin] = useState(true)

  // when component is rendered set property open in order automatically open Dialog when page loads
  useEffect(() => {
    setOpen(true);
  }, []);

  // handle showing LoginUi and hiding SignupUI
  const showLoginUI = () => {
    setIsLogin(true)
  }

  // handle hiding LoginUi and show SignupUI
  const hideLoginUI = () => {
    setIsLogin(false)
  }
  // set open to false to close the Dialog
  const handleClose = () => {
    setOpen(false);
  };

  // function which gets called when submit signup button is pressed
  const handleSignup = values => {
    console.log("Submited values signup:", values);
    //close popup
    handleClose();
  };

  // function which gets called when submit login button is pressed
  const handleLogin = values => {
    console.log("Submited values login:", values);
    //close popup
    handleClose();
  };

  // function which gets called when LoginWithGoogleOrFacebook button is pressed
  const LoginWithGoogleOrFacebook = () => {
    console.log("login with Google or Facebook");
  };

  if (isLogin) {
    authUI = <Fragment>
      <Grid item xs={5} className={classes.gridTitle}>
        <LoginTitle />
      </Grid>
      <Grid item xs={7}>
        <Login
          handleLogin={handleLogin}
          LoginWithGoogleOrFacebook={LoginWithGoogleOrFacebook}
          hideLoginUI={hideLoginUI}
        />
      </Grid>
    </Fragment>
  } else {
    authUI = <Fragment>
      <Grid container className={classes.dialog}>
        <Grid item xs={5} className={classes.gridTitle}>
          <SignupTitle />
        </Grid>
        <Grid item xs={7}>
          <Signup
            handleSignup={handleSignup}
            showLoginUI={showLoginUI}
          />
        </Grid>
      </Grid>
    </Fragment>
  }

  return (
    <Container maxWidth="sm">
      <Popup open={open} handleClose={handleClose}>
        <Grid container className={classes.dialog}>
          {authUI}
        </Grid>
      </Popup >
    </Container >
  );
}
export default AuthPage;
