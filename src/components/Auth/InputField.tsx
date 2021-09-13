import React from 'react'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

type Props = {
  label: string,
  name: string,
  type: string,
  formik: any,
}

const InputField = ({
  label,
  name,
  type,
  formik,
}: Props) => {

  return (
    <Grid item>
      <TextField
        required
        id={label}
        label={label}
        type={type}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
      />

      {
        formik.touched[name] && formik.errors[name] ?
          <div className="auth-error">{formik.errors[name]}</div> :
          null
      }
    </Grid>
  )
}

export default InputField