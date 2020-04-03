import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import LoginImage from "../atoms/LoginImage";
import TitleComponent from "../atoms/TitleComponent";
import Subtitle from "../atoms/Subtitle";

// oganism styling, positioning atoms on layout
const useStyles = makeStyles(theme => ({
  leftTitle: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  positionImage: {
    position: "absolute",
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)"
  }
}));


// Left side of login page
function LoginTitle() {
  const classes = useStyles();
  return (
    <div className={classes.leftTitle}>
      <TitleComponent>Login</TitleComponent>
      <Subtitle>
        <span>Get access to your Orders, Wishlist and Recommendations</span>
      </Subtitle>
      <div className={classes.positionImage}>
        <LoginImage />
      </div>
    </div>
  );
}

export default LoginTitle;
