import React, { memo, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Router from './Router/Router'
import Loader from './components/common/Loader'
import Toastify from './components/common/Toastify'

import { RootState } from './store/store'
import { authorize } from './store/main/thunk'

const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const dispatch = useDispatch()
  
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

      {/* <Header />
      <PageTitle />

      <Sidebar /> */}

      <Router />
    </>
  );
};

export default memo(App)