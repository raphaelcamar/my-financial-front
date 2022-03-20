import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Overview } from '@/transaction/presenters/pages';

export const TransactionRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Overview />} />
  </Routes>
);
