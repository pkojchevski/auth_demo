import React, { forwardRef } from 'react'

import Dialog from "@material-ui/core/Dialog";
// import Slide from "@material-ui/core/Slide";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";

import CancelButton from '../atoms/CancelButton'

const Transition = forwardRef(function Transition(props, ref) {
    return <Fade timeout={200} ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
    dialog: {
        height: "520px",
        position: "relative",
    },
    paper: {
        overflowY: "unset",
        boxShadow: 'none'
    },
}));


function Popup({ children, open, handleClose }) {
    const classes = useStyles();

    // if You want to change Backdrop color, change in BackdropProps -> backgroundColor
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            classes={{
                paper: classes.paper,
            }}
            BackdropProps={{ style: { backgroundColor: 'rgba(0,0,0,0.6)' } }}

        >
            <CancelButton onClick={handleClose}>✕</CancelButton>
            {children}
        </Dialog>
    )
}

export default Popup
