import React from 'react';
import { Route } from 'react-router-dom';
import { TransactionsPage, Test } from '@/transaction/presenters/pages';

export const TransactionRoutes = [
  <Route path="/transacoes" element={<TransactionsPage />} />,
  <Route path="/teste" element={<Test />} />,
  <Route path="/teste-2" element={<Test />} />,
];
