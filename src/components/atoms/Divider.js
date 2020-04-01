import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  divider: {
    color: "#878787",
    margin: "16px 0",
    textAlign: "center"
  }
}));

function Divider({ children }) {
  const classes = useStyles();
  return <div className={classes.divider}>{children}</div>;
}

export default Divider;
