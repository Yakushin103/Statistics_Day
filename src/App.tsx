import React, { memo, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import Router from './Router/Router'
import Loader from './components/common/Loader'
import Toastify from './components/common/Toastify'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

import { RootState } from './store/store'
import { authorize } from './store/main/thunk'

import './App.scss'

const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const dispatch = useDispatch()
  const user = useSelector(({ main }: RootState) => main.user)
  const isSidebarOpen = useSelector(({ main }: RootState) => main.isSidebarOpen)

  useEffect(() => {
    (async () => {

      await dispatch(authorize())

      setIsAuthorized(true)
    })()
  }, [dispatch])

  if (!isAuthorized) { return <Loader show />; }

  return (
    <>
      <Toastify
        autoClose={3000}
        draggable
        newestOnTop
        closeButton={false}
      />

      <Loader />
      <Grid container>
        {
          user &&
          <Grid item xs={12} className="header">
            <Header />
          </Grid>
        }
        {
          user &&
          <Grid item xs={isSidebarOpen ? 2 : 1} className="sidebar">
            <Sidebar
              isSidebarOpen={isSidebarOpen}
            />
          </Grid>
        }

        <Grid item xs className="main">
          <Router />
        </Grid>
      </Grid>


      {/* <PageTitle />

      <Sidebar /> */}


    </>
  );
};

export default memo(App)