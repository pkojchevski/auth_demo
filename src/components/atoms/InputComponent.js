import React from "react";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  helperText: {
    position: 'absolute',
    top: '3.5em'
  }
}))

function InputComponent({ ...rest }) {
  const classes = useStyles()
  return (
    <TextField
      {...rest}
      InputLabelProps={{
        style: { color: "#878787" }
      }}
      FormHelperTextProps={{
        className: classes.helperText
      }}

    />
  );
}

export default InputComponent;
