import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles({
    main:{
        textAlign:"center",
        backgroundColor:"wheat",
        marginTop:20,
        marginBottom:20,
        boxShadow:"3px 3px 4px grey"
    },
    field: {
        marginTop: 40,
        marginBottom: 40,
        display: "block",
    },
    btn: {
        marginTop: 20,
        marginBottom: 40,
    },

    
    
})
export default function Form2() {
    const classes = useStyles()
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setTitleError(false)
        setDetailsError(false)
        if (title == '') { setTitleError(true) }
        if (details == '') { setDetailsError(true) }
        if (title && details) {
            console.log(title, details)

        }
    }
    return (
        <Container  className={classes.main}>
            <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
                Create New
            </Typography>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                   
                    onChange={(e) => setTitle(e.target.value)}
                    className={classes.field}
                    label="Title"
                    variant="outlined"
                    fullWidth
                    required
                    error={titleError}
                />

                <TextField
                    onChange={(e) => setDetails(e.target.value)}
                    className={classes.field}
                    label="Details"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    required
                    error={detailsError}
                />

                <Button className={classes.btn} type="submit"
                    color="Secondary"
                    variant="contained"
                >Submit</Button>
            </form>
        </Container>
    )
}