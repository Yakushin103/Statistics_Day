import React, { memo, lazy } from 'react'
import { useSelector } from 'react-redux'

import { Switch, Route } from 'react-router-dom'

import { RootState } from '../store/store'

import { routePaths } from '../utils/constants'
import lazyWrapper from '../utils/HOK/lazyWrapper'
import protector from '../utils/HOK/protector'
import titleSetter from '../utils/HOK/titleSetter'

const Page404 = lazyWrapper(lazy(() => import('../components/Page404/Page404')))
const Auth = lazyWrapper(lazy(() => import('../components/Auth/Auth')))

const Router = () => {
  const user = useSelector(({ main }: RootState) => main.user);

  if (!user) {
    return <Auth />;
  }

  return (
    <Switch>
      {protectedRoutes.map((route, index) => (
        //@ts-ignore
        <Route key={index} {...route} exact={route.exact ?? true} />
      ))}
    </Switch>
  );
};

// Default exact value – true
const routes = [
  // {
  //   path: routePaths.hrBoards,
  //   component: HrBoards,
  //   pageTitle: 'Custom Trello',
  //   roles: ['hr', 'admin'],
  // },
  {
    path: '/',
    exact: false,
    component: Page404,
    pageTitle: 'Страница не найдена',
  },
];

const protectedRoutes = routes.map((route) => {
  let { component } = route;
  //@ts-ignore
  if (route.roles) {
    //@ts-ignore
    component = protector(component, route.roles);
  }
  //@ts-ignore
  if (route.pageTitle) {
    //@ts-ignore
    component = titleSetter(component, route.pageTitle);
  }
  return { ...route, component };
});

export default memo(Router);