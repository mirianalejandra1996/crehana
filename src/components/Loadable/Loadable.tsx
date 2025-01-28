import React, { Suspense, lazy } from 'react';

// Definimos un tipo para las props del componente que se va a cargar
type LoadableProps = {
  [key: string]: any; // Esto es un tipo genérico, puedes hacer un tipo más específico si lo prefieres
};

// `Loadable` espera un componente que puede recibir props
export function Loadable(Component: React.LazyExoticComponent<React.ComponentType<LoadableProps>>) {
  return (props: LoadableProps) => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}
