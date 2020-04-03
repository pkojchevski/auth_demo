import React, { useState } from "react";

import { Formik } from "formik";

import * as Yup from "yup";

import FormikField from "../molecules/FormikField";
import LinkComponent from "../atoms/LinkComponent";
import FormComponent from "../atoms/FormComponent";
import ButtonWhite from "../atoms/ButtonWhite";
import ButtonOrange from "../atoms/ButtonOrange";
import Divider from "../atoms/Divider";

import { makeStyles } from "@material-ui/core/styles";

// styling organism, positioning atoms on Layout
const useStyles = makeStyles(theme => ({
  positionImage: {
    position: "absolute",
    bottom: "30px",
    left: "16px"
  },
  formContent: {
    padding: "56px 35px 16px",
    height: "calc(100% - 56px - 16px)",
    position: "relative"
  },
  linkPosition: {
    left: "50%",
    transform: "translateX(-50%)",
    position: "absolute",
    bottom: "20px"
  }
}));

// Login organism
const Login = ({
  handleLogin,
  LoginWithGoogleOrFacebook,
  hideLoginUI
}) => {
  const classes = useStyles();

  //set initial values for login form
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

  return (
    <div className={classes.formContent}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          handleLogin(values);
          resetForm();
        }}
        validationSchema={validationSchema}
      >
        {({ touched, errors }) => {
          return (
            <FormComponent noValidate>
              <FormikField
                name="email"
                label="Email"
                required
                error={touched.email && Boolean(errors.email)}
                autoFocus
              />
              <FormikField
                name="password"
                type="password"
                label="Password"
                error={touched.password && Boolean(errors.password)}
                required
              />
              <ButtonOrange
                variant="contained"
                type="submit"
                fullWidth
                style={{ marginTop: "36px" }}
              >
                Login
              </ButtonOrange>
              <Divider>OR</Divider>
              <ButtonWhite
                variant="contained"
                fullWidth
                onClick={LoginWithGoogleOrFacebook}
              >
                Login with Google/Facebook
              </ButtonWhite>

              <LinkComponent>
                <div className={classes.linkPosition} onClick={hideLoginUI}
                  style={{ textDecoration: "none", color: "#2874f0", cursor: 'pointer' }}
                >
                  New User? Create an account{" "}
                </div>
              </LinkComponent>
            </FormComponent>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
