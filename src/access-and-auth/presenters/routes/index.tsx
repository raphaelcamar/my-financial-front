import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login, Subscribe, LoginNew } from '@/access-and-auth/presenters/pages';

export const AccessAndAuthRoutes: React.FC = () => (
  <Routes>
    <Route path="/login" element={<LoginNew />} />
    <Route path="/subscribe" element={<Subscribe />} />
  </Routes>
);
