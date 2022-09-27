import React, { Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { CircularProgress } from '@/core/ui/components/atoms';

const Login = React.lazy(async () => import(/* webpackChunkName: "LoginPage" */ '@/user/ui/pages/login'));
const Subscribe = React.lazy(async () => import(/* webpackChunkName: "SubscribePage" */ '@/user/ui/pages/subscribe'));
const PasswordRecover = React.lazy(
  async () => import(/* webpackChunkName: "PasswordRecover" */ '@/user/ui/pages/password-recover')
);

export const AccessRoutes: RouteObject[] = [
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

export const AccessRoutesComponent = (): React.ReactElement => useRoutes(AccessRoutes);
