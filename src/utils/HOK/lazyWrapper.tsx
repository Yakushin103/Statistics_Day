import React, { memo, Suspense } from 'react'

import Loader from '../../components/common/Loader'

const lazyWrapper = (Component: any) => {
  const Wrapped = (props: any) => (
    <Suspense fallback={<Loader show />}>
      <Component {...props} />
    </Suspense>
  )
  return memo(Wrapped)
}

export default lazyWrapper