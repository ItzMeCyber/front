import { Container } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
    main: {

        backgroundColor: "#e0e0e0",
        marginTop: 20,
        marginBottom: 20,
        padding: 0,
        boxShadow: "0 0 15px #000040",
        height: "500px",
        overflow:'scroll'



    },
})

export default function AboutMe() {
    const classes = useStyles()
    return (

        <Container className={classes.main} >
            <Typography>
                SUHAIL...about
            </Typography>
        </Container>

    )
}