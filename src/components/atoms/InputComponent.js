import React from "react";
import TextField from "@material-ui/core/TextField";

const styles = {
  floatingLabelFocusStyle: {
    color: "somecolor"
  }
};

function InputComponent({ ...rest }) {
  return (
    <TextField
      {...rest}
      InputLabelProps={{
        style: { color: "#878787" }
      }}
    />
  );
}

export default InputComponent;
