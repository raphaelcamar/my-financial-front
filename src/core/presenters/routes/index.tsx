import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';

export const CoreRouter: React.FC = ({ children }) => (
  <BrowserRouter>
    <Routes>{children}</Routes>
  </BrowserRouter>
);
