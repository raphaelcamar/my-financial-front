import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StyledThemeProvider, NotistackProvider } from '@/core/presenters/contexts';
import './global.css';
import { AccessAndAuthProvider } from '@/access-and-auth/presenters/contexts';
import { AccessAndAuthRoutes } from '@/access-and-auth/presenters/routes';
import { TransactionRoutes } from '@/transaction/presenters/routes';

import { PrivateRoute, PublicRoute } from '@/core/presenters/proxies';
import { CoreRoutes } from '@/core/presenters/routes';

ReactDOM.render(
  <StyledThemeProvider>
    <BrowserRouter>
      <NotistackProvider>
        <AccessAndAuthProvider>
          <PublicRoute>
            <AccessAndAuthRoutes />
          </PublicRoute>
          <PrivateRoute>
            <CoreRoutes>{TransactionRoutes}</CoreRoutes>
          </PrivateRoute>
        </AccessAndAuthProvider>
      </NotistackProvider>
    </BrowserRouter>
  </StyledThemeProvider>,
  document.getElementById('main')
);
