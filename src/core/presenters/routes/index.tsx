import React from 'react';
import { RouteObject, useRoutes } from 'react-router';
import { TransactionRoutes } from '@/transaction/presenters/routes';
import { AccessAndAuthRoutes } from '@/access-and-auth/presenters/routes';
import { NotFoundPage, ContainerPage } from '@/core/ui/pages';

export const RootRoutes: RouteObject[] = [
  ...AccessAndAuthRoutes,
  {
    path: '/',
    element: <ContainerPage />,
    caseSensitive: true,
    children: [...TransactionRoutes],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export const RootRoutesComponent = (): React.ReactElement => useRoutes(RootRoutes);
