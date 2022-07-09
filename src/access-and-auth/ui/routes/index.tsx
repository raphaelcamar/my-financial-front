import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { Login, Subscribe, PasswordRecover } from '@/access-and-auth/ui/components/pages';

export const AccessAndAuthRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },

  {
    path: '/cadastro',
    element: <Subscribe />,
  },

  {
    path: '/recuperar-senha',
    element: <PasswordRecover />,
  },
];

export const AccessAndAuthRoutesComponent = (): React.ReactElement => useRoutes(AccessAndAuthRoutes);
