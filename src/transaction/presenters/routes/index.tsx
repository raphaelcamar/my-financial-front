import React, { Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { PrivateRoute } from '@/core/presenters/proxies';
import { CircularProgress } from '@/core/ui/components/atoms';
import { SpentsAndRevenuesPage } from '@/transaction/ui';

const TransactionsPage = React.lazy(
  async () => import(/* webpackChunkName: "TransactionsPage" */ '@/transaction/ui/pages/transactions-page')
);

export const TransactionRoutes: RouteObject[] = [
  // {
  //   path: '/transacoes',
  //   element: (
  //     <Suspense fallback={<CircularProgress color="info" size={40} />}>
  //       <PrivateRoute>
  //         <TransactionsPage />
  //       </PrivateRoute>
  //     </Suspense>
  //   ),
  // },

  {
    path: '/',
    element: (
      <Suspense fallback={<CircularProgress color="info" size={40} />}>
        <PrivateRoute>
          <SpentsAndRevenuesPage />
        </PrivateRoute>
      </Suspense>
    ),
  },
  {
    path: 'despesas-e-receitas',
    element: (
      <Suspense fallback={<CircularProgress color="info" size={40} />}>
        <PrivateRoute>
          <SpentsAndRevenuesPage />
        </PrivateRoute>
      </Suspense>
    ),
  },
];

export const TransactionRoutesComponent = (): React.ReactElement => useRoutes(TransactionRoutes);
