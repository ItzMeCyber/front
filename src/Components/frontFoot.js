import { Container } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
    main: {

        background:"lightblue",
        boxShadow: "inset 0 0 15px #000060",
        marginTop: 20,
        marginBottom: 20,
        height: "60px",
        textAlign:"center",
        paddingTop:10

    },
})

export default function Foot() {
    const classes = useStyles()
    return (

        <div className={classes.main} > 
        <Typography>
            SUHAIL/////
        </Typography>
         </div>

    )
}