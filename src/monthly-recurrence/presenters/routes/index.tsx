import React, { Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { PrivateRoute } from '@/core/presenters/proxies';
import { CircularProgress } from '@/core/ui/components/atoms';

const MonthlyRecurrencePage = React.lazy(
  async () =>
    import(/* webpackChunkName: "MonthlyRecurrencePage" */ '@/monthly-recurrence/ui/pages/monthly-recurrence-page')
);

const TagPage = React.lazy(
  async () => import(/* webpackChunkName: "TagPage" */ '@/monthly-recurrence/ui/pages/tag-page')
);

export const MonthlyRecurrenceRoutes: RouteObject[] = [
  {
    path: '/recorrencias-mensais',
    element: (
      <Suspense fallback={<CircularProgress color="info" size={40} />}>
        <PrivateRoute>
          <MonthlyRecurrencePage />
        </PrivateRoute>
      </Suspense>
    ),
  },
  {
    path: '/tags',
    element: (
      <Suspense fallback={<CircularProgress color="info" />}>
        <TagPage />
      </Suspense>
    ),
  },
];

export const MonthlyRecurrenceRoutesComponent = (): React.ReactElement => useRoutes(MonthlyRecurrenceRoutes);
