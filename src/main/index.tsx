import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/core/presenters/contexts/theme';
import './global.css';
import { AccessAndAuthProvider } from '@/access-and-auth/presenters/contexts';
import { AccessAndAuthRoutes } from '@/access-and-auth/presenters/routes';
import { TransactionRoutes } from '@/transaction/presenters/routes';
import { PrivateRoute } from '@/core/presenters/proxies';
import { Container } from '@/core/presenters/components/organisms';

ReactDOM.render(
  <ThemeProvider>
    <BrowserRouter>
      <AccessAndAuthProvider>
        <AccessAndAuthRoutes />
        <PrivateRoute>
          <Container>
            <TransactionRoutes />
          </Container>
        </PrivateRoute>
      </AccessAndAuthProvider>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('main')
);
