import React from "react";
import Button from "@material-ui/core/Button";

function ButtonForm({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
}

export default ButtonForm;
