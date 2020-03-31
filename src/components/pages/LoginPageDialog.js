import React, { useState, useEffect, forwardRef } from "react";
import Login from "../organisms/Login";
import TitleComponent from "../atoms/TitleComponent.js";
import * as Yup from "yup";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function LoginPageDialog() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  });

  const handleClose = () => {
    setOpen(false);
  };

  const [initialValues, setInitialValues] = useState({
    email: "",
    password: ""
  });

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

  const handleSubmit = values => {
    alert(JSON.stringify(values));
  };

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
      >
        <DialogContent>
          <TitleComponent >Login</TitleComponent>
          <Login
            handleSubmit={handleSubmit}
            LoginWithGoogleOrFacebook={LoginWithGoogleOrFacebook}
            initialValues={initialValues}
            validationSchema={validationSchema}
          />
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </Container>
  );
}
export default LoginPageDialog;
