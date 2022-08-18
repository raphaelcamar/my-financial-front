import React from 'react';
import { RouteObject, useRoutes } from 'react-router';
import { TransactionRoutes } from '@/transaction/presenters/routes';
import { AccessAndAuthRoutes } from '@/access-and-auth/presenters/routes';
import { MonthlyRecurrenceRoutes } from '@/monthly-recurrence/presenters/routes';
import { NotFoundPage, ContainerPage } from '@/core/ui/pages';
import { ProfileRoutes } from '@/profile/presenters';
import { TagRoutes } from '@/tag/presenters';

export const RootRoutes: RouteObject[] = [
  ...AccessAndAuthRoutes,
  {
    path: '/',
    element: <ContainerPage />,
    caseSensitive: true,
    children: [...TransactionRoutes, ...ProfileRoutes, ...MonthlyRecurrenceRoutes, ...TagRoutes],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export const RootRoutesComponent = (): React.ReactElement => useRoutes(RootRoutes);
