import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/core/presenters/contexts/theme';
import './global.css';
import { AccessAndAuthProvider } from '@/access-and-auth/presenters/contexts';
import { AccessAndAuthRoutes } from '@/access-and-auth/presenters/routes';
import { TransactionRoutes } from '@/transaction/presenters/routes';
import { Container } from '@/core/presenters/components/organisms';
import { TransactionProvider } from '@/transaction/presenters/contexts';
import { NotistackProvider } from '@/core/presenters/contexts';
import { PrivateRoute } from '@/core/presenters/proxies';

ReactDOM.render(
  <ThemeProvider>
    <BrowserRouter>
      <NotistackProvider>
        <AccessAndAuthProvider>
          <AccessAndAuthRoutes />
          <PrivateRoute>
            <Container>
              <TransactionProvider>
                <TransactionRoutes />
              </TransactionProvider>
            </Container>
          </PrivateRoute>
        </AccessAndAuthProvider>
      </NotistackProvider>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('main')
);
