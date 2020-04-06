import React, { useState, useEffect, Fragment } from "react";



import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Login from "../organisms/Login";
import Signup from "../organisms/Signup";
import SignupTitle from "../organisms/SignupTitle";
import LoginTitle from "../organisms/LoginTitle";
import Popup from '../organisms/Popup';


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


function SignupPage({ handleClose }) {
    const classes = useStyles();

    // function which gets called when submit signup button is pressed
    const handleSignup = values => {
        console.log("Submited values signup:", values);
        //close popup
        handleClose();
    };

    return (
        <Fragment>
            <Grid container className={classes.dialog}>
                <Grid item xs={5} className={classes.gridTitle}>
                    <SignupTitle />
                </Grid>
                <Grid item xs={7}>
                    <Signup
                        handleSignup={handleSignup}
                    />
                </Grid>
            </Grid>
        </Fragment>
    );
}
export default SignupPage;
