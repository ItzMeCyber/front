import React from 'react';
import { Formik } from 'formik';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  btn: {
      marginTop: 40,
      marginBottom: 40,
     

  }
})

export default function Form() {
  const classes = useStyles()
  return (
    <div className="form">
      <h1 >FORM</h1>
      <Formik
        initialValues={{ name: '', phone: '', email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.name) { errors.name = 'Required'; }
          else if (!values.phone) { errors.phone = 'Required'; }
          else if (!values.email) { errors.email = 'Required'; }
          else if (!values.password) { errors.password = 'Required'; }


          else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          localStorage.setItem("name", values.name)
          localStorage.setItem("phone", values.phone)
          localStorage.setItem("email", values.email)
          localStorage.setItem("password", values.password)
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <TextField id="outlined-basic"
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              label="Name :"
              variant="outlined"
              margin="dense"
           
            
               />
               
            {errors.name && touched.name && errors.name} <br />
            <TextField id="outlined-basic"
              type="number"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              label="Phone :"
              variant="outlined"
              margin="dense" />

            {errors.phone && touched.phone && errors.phone}<br />
            
            <TextField id="outlined-basic"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              label="Email :"
              variant="outlined" 
              margin="dense"/>
            {errors.email && touched.email && errors.email}<br />
            <TextField id="outlined-basic"
              type="password"
              name="password"
              margin="dense"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              label="Password :"
              variant="outlined" />
            {errors.password && touched.password && errors.password}<br />
            <Button className={classes.btn} type="submit" margin="dense" variant="contained" color="primary" disabled={isSubmitting}>
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>)
}