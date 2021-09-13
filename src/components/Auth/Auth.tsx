import React from 'react'
import { useFormik, FormikProps } from 'formik'
import * as Yup from "yup"

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import './Auth.scss'

const SignupSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .required('Required'),
});

interface FormValues {
  login: string,
  password: string,
}

const Auth = (props: FormikProps<FormValues>) => {
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  const { errors, touched } = formik

  return (
    <div className="auth-page">
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
            Welcome !!!
          </h1>
        </Grid>
        <form onSubmit={formik.handleSubmit}>
          <Grid item>
            <TextField
              required
              id="login"
              label="Login"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.login}
            />
            {
              touched.login && errors.login ?
                <div className="auth-error">{formik.errors.login}</div> :
                null
            }
          </Grid>

          <Grid item>
            <TextField
              required
              id="password"
              label="Password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            // autoComplete="current-password"
            />
            {
              touched.password && errors.password ?
                <div>{errors.password}</div> :
                null
            }
          </Grid>

          <Button disabled={Object.values(errors).length > 0} type="submit">Submit</Button>
        </form>
      </Grid>
    </div>
  )
}

export default Auth