import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@/core/presenters/contexts/theme';
import { Login } from '@/access-and-auth/presenters/pages';
import './global.css';
import { AccessAndAuthProvider } from '@/access-and-auth/presenters/contexts';

ReactDOM.render(
  <ThemeProvider>
    <BrowserRouter>
      <AccessAndAuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </AccessAndAuthProvider>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('main')
);
