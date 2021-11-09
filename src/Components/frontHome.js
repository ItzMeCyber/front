import { Button, Container } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import TextMe from "./frontContact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



// import { Typography } from "@material-ui/core";

const useStyles = makeStyles({})




export default function HomeMe() {
    const classes = useStyles()
    return (

        <Container className="container" style={{ padding: "0vh" }} >
            <div className='home-image'>
                <img src="code1.jpg" style={{ width: "100%", height: "85vh" }} />
                <div className='home-text1'>Hi, i am </div>
                <div className='home-text2'>Suhail Bhat</div>
                <div className='home-text3'>Front-End Developer</div>
                <div className='home-text4'>I specialize in designing, building, shipping, and scaling beautiful, <br />
                    usable products with blazing-fast efficiency.</div>

                <Link to="/contact" className='home-btn-position' ><a className="home-btn"><span></span>
                    <span></span>
                    <span></span>
                    <span></span>Get In Touch</a></Link>


            </div>
            {/*

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
<hr className={classes.hrX} />*/}
        </Container >

    )
}