import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login, Subscribe, LoginAnm } from '@/access-and-auth/presenters/pages';

export const AccessAndAuthRoutes: React.FC = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/subscribe" element={<Subscribe />} />
    <Route path="/anm" element={<LoginAnm />} />
  </Routes>
);
