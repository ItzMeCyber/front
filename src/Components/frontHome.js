import { Container } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
// import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
    main: {

        backgroundColor: "#e0e0e0",
        marginTop: 20,
        marginBottom: 20,
        boxShadow: " 0 0 15px #000040",
        padding: 0,
        justifyContent: 'center',
        overflow: 'scroll', height: "500px",

    },
    image: {
        position: " relative",
        textAlign: "center",
        color: " white"
    },
    centered: {
        position: "absolute",
        top: "45%",
        left: "20%",
        transform: "translate(-50%, -50%)",
        fontSize:60,
        lineHeight:1,

    },
    card: {
        backgroundColor: "#e0e0ff",
        marginTop: 20,
        marginBottom: 20,
        boxShadow: " 0 0 15px #000040",
        justifyContent: 'center',
        padding: 10,
        marginRight: 10
    },
    hrX: {
        paddingLeft: 20,
        paddingRight: 50,
        width: "90%",
        border: "2px solid hotpink",
        marginBottom:10
    }

})

export default function HomeMe() {
    const classes = useStyles()
    return (

        <Container className={classes.main}  >
            <div className={classes.image}>
                <img src="website.jpg" style={{ height: 250, width: "100%", }} />
                <div className={classes.centered}>CYBERS<br/>PERSONAL</div>
            </div>


            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div className={classes.card} style={{ marginLeft: 10 }} ><h1 style={{lineHeight:"2px"}}>HELLO</h1>some text goed heresome text goed heresome text
                    goed heresome text goed heresome text goed heresome text goed heresome text goed
                    heresome text goed heresome text goed heresome text goed here</div>
                <div className={classes.card} ><h1 style={{lineHeight:"2px"}}>HELLO</h1>some text goes here2 some text goed heresome text goed heresome text
                    goed heresome text goed heresome text goed heresome text goed heresome text goed
                    heresome text goed heresome text goed heresome text goed here</div>
                <div className={classes.card} > <h1 style={{lineHeight:"2px"}}>HELLO</h1> text goes here3some text goed heresome text goed heresome text
                    goed heresome text goed heresome text goed heresome text goed heresome text goed
                    heresome text goed heresome text goed heresome text goed here</div>
            </div>
            <hr className={classes.hrX} />
        </Container>

    )
}