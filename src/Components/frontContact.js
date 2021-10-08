import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles({
    main: {

        backgroundColor: "#e0e0e0",
        marginTop: 20,
        marginBottom: 20,
        boxShadow: " 0 0 15px #000040",
        height:"500px",
        padding:0, overflow:'scroll'

    },
    btn: {
        marginTop: 7,
        marginBottom: 20,
    },
    field: {

        marginBottom: 8,
        marginRight: 8,
        backgroundColor: "white",
        borderRadius: 3,

    },

    divo: {
        // border: "3px solid black",
        width: "36%",
        padding: "20px",
    },
    divp: {
        // border: "3px solid red",
        width: "36%",
        padding: "20px",
    },
    d2t1: {
        // backgroundColor: "yellow",
        lineHeight: 1.5,
    },
    d2t2: {

        // backgroundColor: "yellow",
        lineHeight: 1.3,
        
    }


})
export default function TextMe() {
    const classes = useStyles()
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
        <Container className={classes.main}>

            <div style={{ display: "flex" }}>
                <div className={classes.divo}>
                    <Typography
                        variant="h4"
                        color="Secondary"
                        component="h2"
                        style={{lineHeight: 1 }}
                    >
                        Just Say Hello ! </Typography><br /><Typography >Please Fill The Form ...</Typography>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <TextField
                            onChange={(e) => setName(e.target.value)}
                            className={classes.field}
                            label="Name"
                            variant="outlined"
                            required
                            error={nameError}
                        />
                        <TextField
                            onChange={(e) => setLastName(e.target.value)}
                            className={classes.field}
                            label="Last Name"
                            variant="outlined"
                            required
                            error={lastNameError}
                        />
                        <br />
                        <TextField
                            onChange={(e) => setMail(e.target.value)}
                            className={classes.field}
                            label="Mail"
                            variant="outlined"
                            type="email"
                            required
                            error={mailError} />
                        <TextField
                            onChange={(e) => setPhone(e.target.value)}
                            className={classes.field}
                            label="Phone"
                            variant="outlined"
                            type="number"
                            required
                            error={phoneError} />
                        <br />
                        <TextField
                            onChange={(e) => setMessage(e.target.value)}
                            className={classes.field}
                            label="Message"
                            variant="outlined"
                            multiline
                            rows={4}
                            required
                            fullWidth
                            error={messageError}

                        />
                        <br />
                        <Button className={classes.btn} type="submit"
                            color="Secondary"
                            variant="contained"
                        >Submit</Button>
                    </form>
                </div>

                <div className={classes.divp}>
                    <Typography

                        variant="h4"
                        color="Secondary"
                        component="h2"
                        style={{ lineHeight: 1 }}
                    >
                        Contact <br />Information </Typography>
                    <br />
                    <Typography
                        className={classes.d2t1}>
                        410 Pinglena<br />Pulwama 192301<br />India
                        <br /><br />Call Us: +12345 67890 <br /><br />
                        We are open from Monday - Friday<br />08: 00am - 05: 00 pm
                    </Typography>


                    <Typography
                        variant="h4"
                        color="Secondary"
                        component="h2"
                        style={{lineHeight: 2 }}
                    >
                        Follow Us</Typography>
                    <Typography
                        className={classes.d2t2}>
                        <a href="https://facebook.com" target="_blank" style={{ padding: 3, textDecoration: 'none', color: "black", borderBottom: "3px solid red" }}> Facebook</a>
                        <a href="https://instagram.com" target="_blank" style={{ padding: 3, textDecoration: 'none', color: "black", borderBottom: "3px solid red" }} > Instagram</a>
                        <a href="https://twitter.com" target="_blank" style={{ padding: 3, textDecoration: 'none', color: "black", borderBottom: "3px solid red" }}> Twitter</a>
                    </Typography>

                </div>
            </div>

        </Container>
    )
}