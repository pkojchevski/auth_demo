import React from "react";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  buttonWhite: {
    background: "#fff",
    boxShadow: "0 4px 6px 0 rgba(0,0,0,.12)",
    color: "#2874f0",
    fontWeight: "500",
    height: "48px"
  }
}));

function ButtonWhite({ children, ...rest }) {
  const classes = useStyles();
  return (
    <Button {...rest} className={classes.buttonWhite}>
      {children}
    </Button>
  );
}

export default ButtonWhite;
