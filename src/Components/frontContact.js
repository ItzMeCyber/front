import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Container } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';



export default function TextMe() {
    //  const classes = useStyles()
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const [nameError, setNameError] = useState(false)
    const [lastNameError, setLastNameError] = useState(false)
    const [mailError, setMailError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [messageError, setMessageError] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        setNameError(false)
        setLastNameError(false)
        setMailError(false)
        setPhoneError(false)
        setMessageError(false)

        if (name == '') { setNameError(true) }
        if (lastName == '') { setLastNameError(true) }
        if (mail == '') { setMailError(true) }
        if (phone == '') { setPhoneError(true) }
        if (message == '') { setMessageError(true) }
        if (name && lastName && mail && phone && message) {
            console.log(name, lastName, message, phone)

        }
    }
    return (
        //CONTACT.............
        <Container className="container">

            <div className='contact-main'>
                <div className="contact-form">
                    <Typography
                        variant="h4"
                        component="h2"
                        style={{ lineHeight: 1, color: "#2196f3" }}
                    >
                        Just Say Hello ! </Typography><br /><Typography style={{ letterSpacing: ".2vh" }}>Please Fill The Form ...</Typography>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <TextField
                            onChange={(e) => setName(e.target.value)}
                            className="contact-field"
                            label="Name"
                            variant="outlined"
                            required
                            error={nameError}
                        />
                        <TextField
                            onChange={(e) => setLastName(e.target.value)}
                            className="contact-field"
                            label="Last Name"
                            variant="outlined"
                            required
                            error={lastNameError}
                        />
                        <br />
                        <TextField
                            onChange={(e) => setMail(e.target.value)}
                            className="contact-field"
                            label="Mail"
                            variant="outlined"
                            type="email"
                            required
                            error={mailError} />
                        <TextField
                            onChange={(e) => setPhone(e.target.value)}
                            className="contact-field"
                            label="Phone"
                            variant="outlined"
                            type="number"
                            required
                            error={phoneError} />
                        <br />
                        <TextField
                            onChange={(e) => setMessage(e.target.value)}
                            className="contact-field"
                            label="Message"
                            variant="outlined"
                            multiline
                            rows={4}
                            required
                            error={messageError}
                            style={{ width: '62%' }}

                        />
                        <br />
                        <Button type="submit" variant="contained" color="primary" >Submit</Button>
                    </form>
                </div>

                <div className="contact-info">
                    <Typography

                        variant="h4"

                        component="h2"
                        style={{ lineHeight: 1, color: "#2196f3" }}
                    >
                        Contact <br />Information </Typography>
                    <br />
                    <Typography
                        className="contact-call">
                        410 Pinglena<br />Pulwama 192301<br />India
                        <br /><br />Call Us: +12345 67890 <br /><br />
                        We are open from Monday - Friday<br />08: 00am - 05: 00 pm
                    </Typography>


                    <Typography
                        variant="h4"
                        component="h2"
                        style={{ lineHeight: 2, color: "#2196f3" }}
                    >
                        Follow Us</Typography>
                    <Typography
                        className="contact-call">
                        <a href="https://facebook.com" target="_blank" className="contact-social"> Facebook</a>
                        <a href="https://instagram.com" target="_blank" className="contact-social"> Instagram</a>
                        <a href="https://twitter.com" target="_blank" className="contact-social"> Twitter</a>
                    </Typography>

                </div>
            </div>

        </Container>
    )
}