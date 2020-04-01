import React from "react";
import Typography from "@material-ui/core/Typography";


function Title({ children }) {
  return (
    <Typography
      component="h2"
      variant="h5"
      style={{ fontSize: "29px", fontWeight: "500" }}
    >
      {children}
    </Typography>
  );
}


export default Title;
