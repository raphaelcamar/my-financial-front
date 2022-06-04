import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/core/presenters/contexts/theme';
import { StyledThemeProvider, NotistackProvider } from '@/core/presenters/contexts';
import './global.css';
import { AccessAndAuthProvider } from '@/access-and-auth/presenters/contexts';
import { AccessAndAuthRoutes } from '@/access-and-auth/presenters/routes';
import { TransactionRoutes } from '@/transaction/presenters/routes';
import { Container } from '@/core/presenters/components/organisms';
import { TransactionProvider } from '@/transaction/presenters/contexts';

import { PrivateRoute, PublicRoute } from '@/core/presenters/proxies';

ReactDOM.render(
  <ThemeProvider>
    <StyledThemeProvider>
      <BrowserRouter>
        <NotistackProvider>
          <AccessAndAuthProvider>
            <PublicRoute>
              <AccessAndAuthRoutes />
            </PublicRoute>
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
    </StyledThemeProvider>
  </ThemeProvider>,
  document.getElementById('main')
);
