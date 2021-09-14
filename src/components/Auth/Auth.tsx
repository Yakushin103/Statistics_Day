import React from 'react'
import { NavLink, useLocation, useHistory } from 'react-router-dom'
import { useFormik, FormikProps } from 'formik'
import * as Yup from "yup"

import Grid from '@material-ui/core/Grid'
import SingIn from './SingIn'

import './Auth.scss'



const Auth = () => {
  const history = useHistory()
  const location = useLocation()
  // location.pathname.split('/')[2]



  console.log('location', location);


  return (
    <div className="auth-page">
      {
        location.pathname.split('/')[2] === undefined &&
        <SingIn />
      }
    </div>
  )
}

export default Auth