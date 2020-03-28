import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikField from "../molecules/FormikField";

import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import LinkComponent from "../atoms/LinkComponent";

const Signup = ({
  handleSubmit,
  SignupWithGoogleOrFacebook,
  initialValues,
  validationSchema
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ dirty, isValid, resetForm }) => {
        return (
          <Form>
            <FormikField name="name" label="Name" required />
            <FormikField name="email" label="Email" required />
            <FormikField name="confirmEmail" label="Confirm email" required />
            <FormikField
              name="password"
              type="password"
              label="Password"
              required
            />
            <FormikField
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              required
            />
            <br />
            <br />
            <Button
              variant="contained"
              color="primary"
              disabled={!dirty || !isValid}
              type="submit"
            >
              Signup
            </Button>
            &nbsp;
            <Button
              variant="contained"
              type="reset"
              color="primary"
              onClick={resetForm}
            >
              Reset
            </Button>
            <br />
            <br />
            <LinkComponent>
              Already have an account?&#160;
              <Link to="/login">Login</Link>
            </LinkComponent>
            <br />
            <br />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={SignupWithGoogleOrFacebook}
            >
              Signup with Google/Facebook
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Signup;
