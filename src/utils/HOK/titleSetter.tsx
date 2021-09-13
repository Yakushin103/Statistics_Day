import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { updatePageTitle } from '../../store/main/reducer'

const titleSetter = (Component: any, title: string) => {
  return memo((props) => {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(updatePageTitle(title))
    }, [dispatch])

    return <Component {...props} />
  })
}

export default titleSetter
