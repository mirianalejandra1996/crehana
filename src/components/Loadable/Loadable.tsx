import { Suspense, ComponentType, ReactNode } from 'react'
import { Loader } from '../Loader/Loader'

// Definir el tipo del componente que se pasará a la función Loadable
export const Loadable = <P extends object>(Component: ComponentType<P>) => {
  return (props: P): ReactNode => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  )
}