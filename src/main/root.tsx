import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RaphaelProvider } from '@raphaelcamar/ui-lib';
import { RootRoutesComponent } from '@/core/presenters/routes';
import { ErrorBoundary } from '@/error-boundary';
import { RootProviders } from './root-providers';

export const Root: React.FC = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <RaphaelProvider>
        <RootProviders>
          <RootRoutesComponent />
        </RootProviders>
      </RaphaelProvider>
    </BrowserRouter>
  </ErrorBoundary>
);
