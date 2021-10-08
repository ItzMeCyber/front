import { Container } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
    main: {

        backgroundColor: "#e0e0e0",
        marginTop: 20,
        marginBottom: 20,
        boxShadow: " 0 0 15px #000040",
        height: "500px",
        padding:0,
        overflow:'scroll'

    },
})

export default function BlogMe() {
    const classes = useStyles()
    return (

        <Container className={classes.main} > 
        <Typography>
            SUHAIL
        </Typography>
         </Container>

    )
}