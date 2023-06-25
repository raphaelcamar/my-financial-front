import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RootRoutesComponent } from '@/core/presenters/routes';
import { ErrorBoundary } from '@/error-boundary';
import { RootProviders } from './root-providers';

export const Root: React.FC = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <RootProviders>
        <RootRoutesComponent />
      </RootProviders>
    </BrowserRouter>
  </ErrorBoundary>
);
