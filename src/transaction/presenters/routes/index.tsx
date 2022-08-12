import React, { Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { PrivateRoute } from '@/core/presenters/proxies';
import { CircularProgress } from '@/core/ui/components/atoms';

// const TransactionsPage = React.lazy(() => import('@/transaction/ui/pages/transactions-page'));
// const Test = React.lazy(() => import('@/transaction/ui/pages/test'));
import { TransactionsPage, Test } from '@/transaction/ui';

export const TransactionRoutes: RouteObject[] = [
  {
    path: '/transacoes',
    element: (
      <Suspense fallback={<CircularProgress color="info" size={40} />}>
        <PrivateRoute>
          <TransactionsPage />
        </PrivateRoute>
      </Suspense>
    ),
  },

  {
    path: '/',
    element: (
      <Suspense fallback={<CircularProgress color="info" size={40} />}>
        <PrivateRoute>
          <TransactionsPage />
        </PrivateRoute>
      </Suspense>
    ),
  },

  {
    path: '/teste',
    element: (
      <Suspense fallback={<CircularProgress color="info" size={40} />}>
        <PrivateRoute>
          <Test />
        </PrivateRoute>
      </Suspense>
    ),
  },

  {
    path: '/teste-2',
    element: (
      <Suspense fallback={<CircularProgress color="info" size={40} />}>
        <PrivateRoute>
          <Test />
        </PrivateRoute>
      </Suspense>
    ),
  },
];

export const TransactionRoutesComponent = (): React.ReactElement => useRoutes(TransactionRoutes);
