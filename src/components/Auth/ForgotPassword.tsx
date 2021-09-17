import React from 'react'
import { NavLink } from 'react-router-dom'
import { useFormik } from 'formik'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { routePaths } from '../../utils/constants'

const ForgotPassword = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2))
    },
  })

  const { errors, touched } = formik

  return (
    <Grid
      className="auth-page-form"
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <Grid item>
        <h1>
          Enter u email
        </h1>
      </Grid>

      <form onSubmit={formik.handleSubmit}>
        <Grid item>
          <TextField
            required
            id="email"
            label="Email"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {
            touched.email && errors.email ?
              <div className="auth-error">{formik.errors.email}</div> :
              null
          }
        </Grid>

        <Grid item>
          <NavLink to={routePaths.auth.signIn}>
            Sing in
          </NavLink>
        </Grid>

        <Button disabled={Object.values(errors).length > 0} type="submit">Submit</Button>
      </form>
    </Grid>
  )
}

export default ForgotPassword