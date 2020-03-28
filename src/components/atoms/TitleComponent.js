import React from "react";
import Typography from "@material-ui/core/Typography";

function Title({ children }) {
  return (
    <Typography component="h1" variant="h5">
      {children}
    </Typography>
  );
}

export default Title;
