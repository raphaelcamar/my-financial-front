import React from 'react';
import { Route, Routes } from 'react-router';
import { Container } from '@/core/presenters/components/organisms';

export const CoreRoutes: React.FC = ({ children }) => (
  <Routes>
    <Route path="/" element={<Container />}>
      {children}
    </Route>
  </Routes>
);
