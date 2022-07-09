import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { TransactionsPage, Test } from '@/transaction/ui/pages';
import { PrivateRoute } from '@/core/presenters/proxies';

export const TransactionRoutes: RouteObject[] = [
  {
    path: '/transacoes',
    element: (
      <PrivateRoute>
        <TransactionsPage />
      </PrivateRoute>
    ),
  },

  {
    path: '/teste',
    element: (
      <PrivateRoute>
        <Test />
      </PrivateRoute>
    ),
  },

  {
    path: '/teste-2',
    element: (
      <PrivateRoute>
        <Test />
      </PrivateRoute>
    ),
  },
];

export const TransactionRoutesComponent = (): React.ReactElement => useRoutes(TransactionRoutes);
