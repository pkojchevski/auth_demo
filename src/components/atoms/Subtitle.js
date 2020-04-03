import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  subtitle: {
    fontSize: "18px",
    marginTop: "16px",
    lineHeight: "150%"
  }
}));

function Subtitle({ children }) {
  const classes = useStyles();
  return <p className={classes.subtitle}>{children}</p>;
}

export default Subtitle;
