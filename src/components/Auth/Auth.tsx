import React, { useState, useEffect } from 'react'
import { NavLink, useLocation, useHistory } from 'react-router-dom'
import { useFormik, FormikProps } from 'formik'
import * as Yup from "yup"

import Grid from '@material-ui/core/Grid'
import SingIn from './SingIn'
import SingUp from './SingUp'
import ForgotPassword from './ForgotPassword'

import './Auth.scss'



const Auth = () => {
  const [authLoc, setAuthLoc] = useState('sign-in')
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    let local = location.pathname.split('/')[2]
    local === undefined ? setAuthLoc('sign-in') : setAuthLoc(local)
  }, [location])

  return (
    <div className="auth-page">
      {
        authLoc === 'sign-in' &&
        <SingIn />
      }

      {
        authLoc === 'sign-up' &&
        <SingUp />
      }

      {
        authLoc === 'forgot-password' &&
        <ForgotPassword />
      }
    </div>
  )
}

export default Auth