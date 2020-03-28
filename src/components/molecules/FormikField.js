import React from "react";
import { ErrorMessage, Field } from "formik";
import InputComponent from "../atoms/InputComponent";

const FormikField = ({
  name,
  label,
  type = "text",
  required = false,
  error
}) => {
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
      error={error}
      helperText={<ErrorMessage name={name} />}
    />
  );
};

export default FormikField;
