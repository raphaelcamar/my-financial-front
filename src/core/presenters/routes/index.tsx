import React, { useEffect } from 'react';
import { RouteObject, useLocation, useRoutes } from 'react-router';
import { TransactionRoutes } from '@/transaction/presenters/routes';
import { Container } from '@/core/presenters/components/organisms';
import { AccessAndAuthRoutes } from '@/access-and-auth/presenters/routes';
import { NotFoundPage } from '@/core/presenters/pages';

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
    element: <NotFoundPage />,
  },
];

export const RootRoutesComponent = (): React.ReactElement => useRoutes(RootRoutes);
