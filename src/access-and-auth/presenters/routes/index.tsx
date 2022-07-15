import React, { Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { Login, Subscribe, PasswordRecover } from '@/access-and-auth/ui/pages';
import { CircularProgress } from '@/core/ui/components/atoms';

export const AccessAndAuthRoutes: RouteObject[] = [
  {
    path: '/login',
    element: (
      <Suspense fallback={<CircularProgress color="info" size={40} />}>
        <Login />
      </Suspense>
    ),
  },

  {
    path: '/cadastro',
    element: (
      <Suspense fallback={<CircularProgress size={40} />}>
        <Subscribe />
      </Suspense>
    ),
  },

  {
    path: '/recuperar-senha',
    element: (
      <Suspense fallback={<CircularProgress color="info" size={40} />}>
        <PasswordRecover />,
      </Suspense>
    ),
  },
];

export const AccessAndAuthRoutesComponent = (): React.ReactElement => useRoutes(AccessAndAuthRoutes);
