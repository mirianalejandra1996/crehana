import { Suspense } from 'react'
import Loader from '../Loader/Loader'

import React from 'react'

export const Loadable = (Component) => {
  return (props) => (
    <Suspense fallback={<Loader/>}>
        <Component {...props} />
    </Suspense>
  )
}

