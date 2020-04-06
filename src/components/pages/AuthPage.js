import React, { useState, useEffect, Fragment } from "react";



import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Login from "../organisms/Login";
import Signup from "../organisms/Signup";
import SignupTitle from "../organisms/SignupTitle";
import LoginTitle from "../organisms/LoginTitle";
import Popup from '../organisms/Popup';
import Router from '../../routes/Router'


// page styling, positioning atoms on layout
const useStyles = makeStyles(theme => ({
  dialog: {
    height: "520px",
    position: "relative"
  },
  gridTitle: {
    background: "#2874f0",
    padding: "40px 35px",
    color: "white",
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px'
  },
  paper: {
    overflowY: "unset"
  }
}));


function AuthPage() {
  const classes = useStyles();

  // set open property to open/close dialog
  const [open, setOpen] = useState(false);

  // when component is rendered set property open in order automatically open Dialog when page loads
  useEffect(() => {
    setOpen(true);
  }, []);

  // set open to false to close the Dialog
  const handleClose = () => {
    console.log('HandleClose')
    setOpen(false);
  };
  return (
    <Container maxWidth="sm">
      <Popup open={open} handleClose={handleClose}>
        <Grid container className={classes.dialog}>
          <Router handleClose={handleClose} />
        </Grid>
      </Popup >
    </Container >
  );
}
export default AuthPage;
