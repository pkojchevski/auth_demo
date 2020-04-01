import React from "react";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  cancelButton: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    color: "#fff",
    fontSize: "32px",
    lineHeight: "1",
    verticalAlign: "top",
    position: "absolute",
    top: "-5px",
    right: "-50px"
  }
}));

function CancelButton({ children, ...rest }) {
  const classes = useStyles();
  return (
    <Button {...rest} className={classes.cancelButton}>
      {children}
    </Button>
  );
}

export default CancelButton;
