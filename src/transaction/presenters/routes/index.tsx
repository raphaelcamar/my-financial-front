import React from 'react';
import { Route } from 'react-router-dom';
import { TransactionsPage } from '@/transaction/presenters/pages';

export const TransactionRoutes = [<Route path="/transacoes" element={<TransactionsPage />} />];
