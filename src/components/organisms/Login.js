import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";

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
  handleSubmit,
  LoginWithGoogleOrFacebook,
  initialValues,
  validationSchema
}) => {
  const classes = useStyles();
  return (
    <div className={classes.formContent}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
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
                <div className={classes.linkPosition}>
                  <Link
                    to="/signup"
                    style={{ textDecoration: "none", color: "#2874f0" }}
                  >
                    New User? Create an account{" "}
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

export default Login;
