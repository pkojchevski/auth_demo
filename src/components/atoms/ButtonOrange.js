import React from "react";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  buttonOrange: {
    background: "#fb641b",
    boxShadow: "0 1px 2px 0 rgba(0,0,0,.2)",
    color: "#fff",
    fontWeight: "500",
    height: "48px"
  }
}));

function ButtonOrange({ children, ...rest }) {
  const classes = useStyles();
  return (
    <Button {...rest} className={classes.buttonOrange}>
      {children}
    </Button>
  );
}

export default ButtonOrange;
