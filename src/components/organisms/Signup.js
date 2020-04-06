import React, { useState } from "react";

import { Formik } from "formik";

import * as Yup from "yup";

import { Link } from 'react-router-dom'

import FormikField from "../molecules/FormikField";
import FormComponent from "../atoms/FormComponent";
import ButtonOrange from "../atoms/ButtonOrange";
import ButtonWhite from "../atoms/ButtonWhite";

import { makeStyles } from "@material-ui/core/styles";

// styling organism, positioning atoms on Layout
const useStyles = makeStyles(theme => ({
  positionImage: {
    position: "absolute",
    bottom: "30px",
    left: "16px"
  },
  formContent: {
    padding: "16px 35px 16px",
    height: "calc(100% - 26px - 16px)",
    position: "relative"
  },
  link: {
    textDecoration: 'none'
  }
}));

// Signup organism
const Signup = ({ handleSignup, showLoginUI }) => {
  const classes = useStyles();

  //set initial values for signup form
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: ""
  });

  // set validation rules for Signup Fields
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


  return (
    <div className={classes.formContent}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          handleSignup(values);
          resetForm();
        }}
        validationSchema={validationSchema}
      >
        {({ touched, errors }) => {
          return (
            <FormComponent noValidate>
              <FormikField
                name="name"
                label="Name"
                required
                error={touched.name && Boolean(errors.name)}
              />
              <FormikField
                name="email"
                label="Email"
                required
                error={touched.email && Boolean(errors.email)}
              />
              <FormikField
                name="confirmEmail"
                label="Confirm email"
                required
                error={touched.confirmEmail && Boolean(errors.confirmEmail)}
              />
              <FormikField
                name="password"
                type="password"
                label="Password"
                error={touched.password && Boolean(errors.password)}
                required
              />
              <FormikField
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                required
              />

              <ButtonOrange
                variant="contained"
                type="submit"
                fullWidth
                style={{ margin: '36px 0 16px 0' }}
              >
                Signup
              </ButtonOrange>
              <Link to='/login' className={classes.link} >
                <ButtonWhite
                  fullWidth
                  style={{ textTransform: 'none' }}>

                  Existing User? Signin
                </ButtonWhite>
              </Link>

            </FormComponent>
          );
        }}
      </Formik>
    </div>
  );
};

export default Signup;
