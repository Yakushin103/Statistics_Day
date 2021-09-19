import React, { lazy,useMemo, memo } from 'react'
import { useLocation, withRouter } from 'react-router-dom'

import lazyWrapper from '../../utils/HOK/lazyWrapper'

import { routePaths } from '../../utils/constants'

import './Auth.scss'

const SignIn = lazyWrapper(lazy(() => import('./SignIn')))
const SignUp = lazyWrapper(lazy(() => import('./SignUp')))
const ForgotPassword = lazyWrapper(lazy(() => import('./ForgotPassword')))

const Auth = () => {
  const location = useLocation()

  const openedForm = useMemo(() => formes.find((form) => {
    let isOpen = location?.pathname === form.path;
    if (form.path === '/') {
      isOpen = !notSignInRoutes.includes(location?.pathname || '/');
    }
    return isOpen;
  }), [location]);

  return (
    <div className="auth-page">
      {formes.map((form, index) => {
        if (form.path === openedForm?.path) {
          const Component = form.component
          return (
            <Component key={index} />
          )
        }
      })}
    </div>
  )
}

const notSignInRoutes = [
  routePaths.auth.signIn,
  routePaths.auth.signUp,
  routePaths.auth.forgotPassword,
  routePaths.auth.resetPassword,
];
const formes = [
  {
    path: routePaths.auth.signUp,
    component: SignUp,
    exact: true,
  }, {
    path: routePaths.auth.signIn || '/',
    component: SignIn,
    exact: false,
  }, {
    path: routePaths.auth.forgotPassword,
    component: ForgotPassword,
    exact: true,
    pageTitle: 'Восстановление пароля',
  },
  //  {
  //   path: routePaths.auth.resetPassword,
  //   component: ResetPassword,
  //   exact: true,
  //   pageTitle: 'Смена пароля',
  // },
];

export default withRouter(memo(Auth))