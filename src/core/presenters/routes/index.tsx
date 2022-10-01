import React from 'react';
import { RouteObject, useRoutes } from 'react-router';
import { TransactionRoutes } from '@/transaction/presenters/routes';
import { AccessRoutes, ProfileRoutes } from '@/user/presenters/routes';
import { MonthlyRecurrenceRoutes } from '@/monthly-recurrence/presenters/routes';
import { NotFoundPage, ContainerPage } from '@/core/ui/pages';

export const RootRoutes: RouteObject[] = [
  ...AccessRoutes,
  {
    path: '/',
    element: <ContainerPage />,
    caseSensitive: true,
    children: [...TransactionRoutes, ...ProfileRoutes, ...MonthlyRecurrenceRoutes],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export const RootRoutesComponent = (): React.ReactElement => useRoutes(RootRoutes);
