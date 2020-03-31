import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";

import ButtonComponent from "../atoms/ButtonComponent";
import FormikField from "../molecules/FormikField";
import LinkComponent from "../atoms/LinkComponent";
import FormComponent from "../atoms/FormComponent";

const Login = ({
  handleSubmit,
  LoginWithGoogleOrFacebook,
  initialValues,
  validationSchema
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ dirty, touched, isValid, resetForm, errors }) => {
        return (
          <FormComponent>
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
            <br />
            <br />
            <ButtonComponent
              variant="contained"
              color="primary"
              disabled={!dirty || !isValid}
              type="submit"
            >
              Login
            </ButtonComponent>
            &nbsp;
            <ButtonComponent
              variant="contained"
              type="reset"
              color="primary"
              onClick={resetForm}
            >
              Reset
            </ButtonComponent>
            <br />
            <br />
            <LinkComponent>
              You do not have account please &#160;
              <Link to="/signup">Sign up</Link>
            </LinkComponent>
            <br />
            <br />
            <ButtonComponent
              variant="contained"
              color="primary"
              fullWidth
              onClick={LoginWithGoogleOrFacebook}
            >
              Login with Google/Facebook
            </ButtonComponent>
          </FormComponent>
        );
      }}
    </Formik>
  );
};

export default Login;
