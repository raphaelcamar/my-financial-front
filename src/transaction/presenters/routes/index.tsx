import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from '@/core/presenters/components/organisms/container';
import { PrivateRoute } from '@/core/presenters/routes/privateRoute';

export const TransactionRoutes: React.FC = () => (
  <Routes>
    <Route
      path="/"
      element={
        <PrivateRoute>
          <Container />
        </PrivateRoute>
      }
    />
  </Routes>
);
