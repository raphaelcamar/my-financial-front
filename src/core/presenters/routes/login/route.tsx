import React from 'react';
import { Route } from 'react-router-dom';
import { CoreRouter } from '..';
import { Login } from '@/access-and-auth/presenters/login';

export const LoginRouter: React.FC = () => (
  <CoreRouter>
    <Route path="/" element={<Login />} />
  </CoreRouter>
);
