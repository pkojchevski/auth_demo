import React, { useState, useEffect, forwardRef } from "react";
import Signup from "../organisms/Signup";
import * as Yup from "yup";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";

import SignupTitle from "../organisms/SignupTitle";
import CancelButton from "../atoms/CancelButton";

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

function SignupPage() {
  const classes = useStyles();
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: ""
  });

  useEffect(() => {
    setOpen(true);
  });

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const [validationSchema, setValidationSchema] = useState(
    Yup.object().shape({
      name: Yup.string(
        "Enter full name as alphabets only, no numbers and special characters should be given"
      )
        .min(2, "Name must contain at least 2 characters")
        .max(30, "Name must contain no more then 20 characters")
        .required("Name is required"),
      email: Yup.string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required")
        .max(35, "Email must contain no more then 35 characters")
        .matches(
          /^[A-Za-z].*$/,
          "Email should not start with number orspecial character"
        ),
      confirmEmail: Yup.string("Enter your email")
        .required("Confirm your email")
        .oneOf([Yup.ref("email")], "Email does not match")
        .max(35, "Email must contain no more then 35 characters"),
      password: Yup.string("Enter a Password")
        .min(8, "Password must contain at least 8 characters")
        .max(20, "Password must contain no more then 20 characters")
        .required("Enter your password")
        .matches(
          /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20}/,
          "Password must contain at least one uppercase,one number, one special character"
        )
        .matches(/^[A-Z]/, "Password must start with upper case"),
      confirmPassword: Yup.string("Enter a password")
        .required("Confirm your password")
        .oneOf([Yup.ref("password")], "Enter correct password")
    })
  );

  const handleSubmit = values => {
    alert(JSON.stringify(values));
  };

  const SignupWithGoogleOrFacebook = () => {
    console.log("register with Google or Facebook");
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
              <SignupTitle />
            </Grid>
            <Grid item xs={7}>
              <Signup
                handleSubmit={handleSubmit}
                SignupWithGoogleOrFacebook={SignupWithGoogleOrFacebook}
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
export default SignupPage;
