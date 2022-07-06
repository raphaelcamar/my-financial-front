import React from 'react';
import { RouteObject, useRoutes } from 'react-router';
import { TransactionRoutes } from '@/transaction/presenters/routes';
import { Container } from '@/core/presenters/components/organisms';
import { AccessAndAuthRoutes } from '@/access-and-auth/presenters/routes';

export const RootRoutes: RouteObject[] = [
  ...AccessAndAuthRoutes,
  {
    path: '/',
    element: <Container />,
    caseSensitive: true,
    children: [...TransactionRoutes],
  },
  {
    path: '*',
    element: <h1>Rota não encontrada</h1>,
  },
];

export const RootRoutesComponent = (): React.ReactElement => useRoutes(RootRoutes);
