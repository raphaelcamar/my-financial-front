import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './global.css';
import { AccessAndAuthRoutes } from '@/access-and-auth/presenters/routes';
import { TransactionRoutes } from '@/transaction/presenters/routes';

import { PrivateRoute, PublicRoute } from '@/core/presenters/proxies';
import { CoreRoutes } from '@/core/presenters/routes';
import { RootProviders } from './root-providers';

ReactDOM.render(
  <BrowserRouter>
    <RootProviders>
      <PublicRoute>
        <AccessAndAuthRoutes />
      </PublicRoute>
      <PrivateRoute>
        <CoreRoutes>{TransactionRoutes}</CoreRoutes>
      </PrivateRoute>
    </RootProviders>
  </BrowserRouter>,
  document.getElementById('main')
);
