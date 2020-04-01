import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikField from "../molecules/FormikField";

import FormComponent from "../atoms/FormComponent";
import { Link } from "react-router-dom";

import LinkComponent from "../atoms/LinkComponent";
import ButtonWhite from "../atoms/ButtonWhite";
import ButtonOrange from "../atoms/ButtonOrange";
import Divider from "../atoms/Divider";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  positionImage: {
    position: "absolute",
    bottom: "30px",
    left: "16px"
  },
  formContent: {
    padding: "0 16px",
    height: "100%",
    position: "relative"
  },
  linkPosition: {
    left: "50%",
    transform: "translateX(-50%)",
    position: "absolute",
    bottom: "20px"
  }
}));

const Signup = ({
  handleSubmit,
  SignupWithGoogleOrFacebook,
  initialValues,
  validationSchema
}) => {
  const classes = useStyles();
  return (
    <div className={classes.formContent}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ dirty, touched, isValid, resetForm, errors }) => {
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
                style={{ marginTop: "16px" }}
              >
                Signup
              </ButtonOrange>
              <LinkComponent>
                <div className={classes.linkPosition}>
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "#2874f0" }}
                  >
                    Existing User? Signin
                  </Link>
                </div>
              </LinkComponent>
            </FormComponent>
          );
        }}
      </Formik>
    </div>
  );
};

export default Signup;
