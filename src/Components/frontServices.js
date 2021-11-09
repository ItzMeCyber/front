import { Container } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { FaLaptopCode } from 'react-icons/fa';
import { FaProjectDiagram } from 'react-icons/fa';
import { MdDeveloperMode } from 'react-icons/md';

const useStyles = makeStyles({

})

export default function ServiceMe() {
    const classes = useStyles()
    return (

        <Container className="container" >
            <React.Fragment >
                <div className="services">
                    <div className="service-card">
                        <div className='service-top'> <FaLaptopCode /> <br /> WEB DESIGN</div>
                        <div className='service-bottom'>TEXT GOES HERE......TEXT GOES HERE......
                            TEXT GOES HERE......TEXT GOES HERE......TEXT GOES HERE......</div>
                    </div>
                    <div className="service-card">
                        <div className='service-top'><FaProjectDiagram /><br />PRODUCT DESIGN</div>
                        <div className='service-bottom'>TEXT GOES HERE......TEXT GOES HERE......
                            TEXT GOES HERE......TEXT GOES HERE......TEXT GOES HERE......</div>
                    </div>
                    <div className="service-card">
                        <div className='service-top'><MdDeveloperMode /><br />DEVELOPMENT</div>
                        <div className='service-bottom'>TEXT GOES HERE......TEXT GOES HERE......
                            TEXT GOES HERE......TEXT GOES HERE......TEXT GOES HERE......</div>
                    </div>
                </div>
                <div className="services">
                    <div className="service-card">
                        <div className='service-top'> <FaLaptopCode /> <br /> WEB DESIGN</div>
                        <div className='service-bottom'>TEXT GOES HERE......TEXT GOES HERE......
                            TEXT GOES HERE......TEXT GOES HERE......TEXT GOES HERE......</div>
                    </div>
                    <div className="service-card">
                        <div className='service-top'><FaProjectDiagram /><br />PRODUCT DESIGN</div>
                        <div className='service-bottom'>TEXT GOES HERE......TEXT GOES HERE......
                            TEXT GOES HERE......TEXT GOES HERE......TEXT GOES HERE......</div>
                    </div>
                    <div className="service-card">
                        <div className='service-top'><MdDeveloperMode /><br />DEVELOPMENT</div>
                        <div className='service-bottom'>TEXT GOES HERE......TEXT GOES HERE......
                            TEXT GOES HERE......TEXT GOES HERE......TEXT GOES HERE......</div>
                    </div>
                </div>



            </React.Fragment>
        </Container>

    )
}