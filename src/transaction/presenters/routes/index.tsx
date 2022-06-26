import React from 'react';
import { Route } from 'react-router-dom';
import { OverviewPage, TransactionsPage } from '@/transaction/presenters/pages';

export const TransactionRoutes = [
  <Route path="/" element={<OverviewPage />} />,
  <Route path="/transacoes" element={<TransactionsPage />} />,
];
