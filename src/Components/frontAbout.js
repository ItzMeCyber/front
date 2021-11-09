import { Container } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";


const useStyles = makeStyles({

})

export default function AboutMe() {
    const classes = useStyles()
    return (

        <Container className="container" >
            <React.Fragment>
                <div >
                    <div className="about-main">

                        <div className="about" >About Me</div>

                        <div> <img src="logo512.png" className="about-img" />

                        </div>
                    </div>
                    <hr />
                    <div>
                        <div className="aboutme1" >My Name Is Suhail Bhat. I Am A UI Designer &
                            <br /> Front End Developer From Kashmir,INDIA.
                        </div>
                        <div className="aboutme2"> I Enjoy To Take Complex Problems & Turns Them
                            Into Simple &<br />  Beautiful Design . I Also Love The
                            Logic And Structure Of Coding & ALways<br />  Strive To Write
                            Elegant & Efficient Code, Whether It Be HTML, CSS Or JavaScript.
                        </div>
                    </div>
                </div>

            </React.Fragment>
        </Container>

    )
}