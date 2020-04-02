import React, { useState, useEffect, forwardRef } from "react";
import Login from "../organisms/Login";
import * as Yup from "yup";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";

import LoginTitle from "../organisms/LoginTitle";
import CancelButton from "../atoms/CancelButton";

// page styling, positioning atoms on layout
const useStyles = makeStyles(theme => ({
  dialog: {
    height: "520px",
    position: "relative"
  },
  gridTitle: {
    background: "#2874f0",
    padding: "40px 35px",
    color: "white"
  },

  paper: {
    overflowY: "unset"
  }
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function LoginPageDialog() {
  const classes = useStyles();

  // set open property to open/close dialog
  const [open, setOpen] = useState(false);

  // when component is rendered set property open in order automatically open Dialog when page loads
  useEffect(() => {
    setOpen(true);
  });

  // set open to false to close the Dialog
  const handleClose = () => {
    setOpen(false);
  };

  //set initial values for Formik form
  const [initialValues, setInitialValues] = useState({
    email: "",
    password: ""
  });

  // set validation rules for Formik Fields
  const [validationSchema, setValidationSchema] = useState(
    Yup.object().shape({
      email: Yup.string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required")
        .max(35, "Email must contain no more then 35 characters")
        .matches(
          /^[A-Za-z].*$/,
          "Email should not start with number or special char"
        ),
      password: Yup.string("Enter a Password")
        .min(8, "Password must contain at least 8 characters")
        .max(20, "Password must contain no more then 20 characters")
        .required("Enter your password")
        .matches(
          /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20}/,
          "Password must contain at least one uppercase,number,special char"
        )
        .matches(/^[A-Z]/, "Password must start with upper case")
    })
  );

  // function which gets called when submit button is pressed
  const handleSubmit = values => {
    console.log("Submited values:", values);
  };

  // function which gets called when LoginWithGoogleOrFacebook button is pressed
  const LoginWithGoogleOrFacebook = () => {
    console.log("login with Google or Facebook");
  };

  return (
    <Container maxWidth="sm">
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        classes={{
          paper: classes.paper
        }}
      >
        <div styles={{ position: "relative" }}>
          <CancelButton onClick={handleClose}>✕</CancelButton>
          <Grid container className={classes.dialog}>
            <Grid item xs={5} className={classes.gridTitle}>
              <LoginTitle />
            </Grid>
            <Grid item xs={7}>
              <Login
                handleSubmit={handleSubmit}
                LoginWithGoogleOrFacebook={LoginWithGoogleOrFacebook}
                initialValues={initialValues}
                validationSchema={validationSchema}
              />
            </Grid>
          </Grid>
        </div>
      </Dialog>
    </Container>
  );
}
export default LoginPageDialog;
