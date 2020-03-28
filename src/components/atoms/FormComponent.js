import React from "react";
import { Form } from "formik";

function FormComponent({ children }) {
  return <Form>{children}</Form>;
}

export default FormComponent;
