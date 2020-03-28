import React from "react";
import { ErrorMessage, Field } from "formik";
// import TextField from "@material-ui/core/TextField";
import InputComponent from "../atoms/InputComponent";

const FormikField = ({ name, label, type = "text", required = false }) => {
  return (
    <Field
      required={required}
      autoComplete="off"
      as={InputComponent}
      label={label}
      name={name}
      margin="normal"
      fullWidth
      type={type}
      helperText={<ErrorMessage name={name} />}
    />
  );
};

export default FormikField;
