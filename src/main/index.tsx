import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@/core/presenters/contexts/theme';
import { Login } from '@/access-and-auth/presenters/pages';
import './global.css';
import { AccessAndAuthProvider } from '@/access-and-auth/presenters/contexts';
import { Subscribe } from '@/access-and-auth/presenters/pages/subscribe';

ReactDOM.render(
  <ThemeProvider>
    <BrowserRouter>
      <AccessAndAuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/main" element={<div>TESTEAAAAAAAAAAAAA</div>} />
        </Routes>
      </AccessAndAuthProvider>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('main')
);
