import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import ButtonComponent from "../atoms/ButtonComponent";
import FormikField from "../molecules/FormikField";
import LinkComponent from "../atoms/LinkComponent";

const initialValues = {
  email: "",
  password: ""
};

const LoginSchema = Yup.object().shape({
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
});

const Login = () => {
  const handleSubmit = values => {
    alert(JSON.stringify(values));
  };

  const LoginWithGoogleOrFacebook = () => {
    console.log("login with Google or Facebook");
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      {({ dirty, isValid, resetForm }) => {
        return (
          <Form>
            <FormikField name="email" label="Email" required />
            <FormikField
              name="password"
              type="password"
              label="Password"
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
          </Form>
        );
      }}
    </Formik>
  );
};

export default Login;
