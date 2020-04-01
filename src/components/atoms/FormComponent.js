import React from "react";
import { Form } from "formik";

function FormComponent({ children, ...rest }) {
  return <Form {...rest}>{children}</Form>;
}

export default FormComponent;
