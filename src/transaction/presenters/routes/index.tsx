import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { OverviewPage, TransactionsPage } from '@/transaction/presenters/pages';

export const TransactionRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<OverviewPage />} />
    <Route path="/transacoes" element={<TransactionsPage />} />
  </Routes>
);
