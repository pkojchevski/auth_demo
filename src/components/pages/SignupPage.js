import React, { useState } from "react";
import Signup from "../organisms/Signup";
import TitleComponent from "../atoms/TitleComponent.js";
import * as Yup from "yup";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

function SignupPage() {
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: ""
  });

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
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <TitleComponent>Signup</TitleComponent>
        <Signup
          handleSubmit={handleSubmit}
          SignupWithGoogleOrFacebook={SignupWithGoogleOrFacebook}
          initialValues={initialValues}
          validationSchema={validationSchema}
        />
      </Grid>
    </Container>
  );
}
export default SignupPage;
