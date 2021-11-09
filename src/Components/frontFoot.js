
import React from "react";
import { Typography, Container } from "@material-ui/core";




export default function Foot() {

    return (

        <Container className="frontFooter" >
            <Typography>
                <div>

                    <div style={{ textAlign: "center" }}> &copy; Copyright
                        <strong><span> Cyber</span></strong>. All
                        Rights
                        Reserved
                    </div>
                    <div className="frontFooterLinks">
                        <div style={{ textAlign: "center", paddingright: "10px" }}><strong><span>Useful Links</span></strong><br />
                            <a href="#">link-1</a><br />
                            <a href="#">link-2</a><br />
                            <a href="#">link-3</a>
                        </div>
                        <div style={{ textAlign: "center", paddingLeft: "10px" }}><strong><span>Social Links</span></strong><br />
                            <a href="#" >FaceBook</a><br />
                            <a href="#" >Insta</a><br />
                            <a href="#">link-3</a>
                        </div>

                    </div>
                </div>

            </Typography>
        </Container>

    )
}