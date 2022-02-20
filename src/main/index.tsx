import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@/core/presenters/contexts/theme';
import { CoreRouter } from '@/core/presenters/routes';
import { Login } from '@/access-and-auth/presenters/login';
import './global.css';

ReactDOM.render(
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('main')
);
