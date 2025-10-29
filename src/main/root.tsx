import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RootRoutesComponent } from '@/core/presenters/routes';
import { ErrorBoundary } from '@/error-boundary';
import { RootProviders } from './root-providers';
import { MessageCommunicationProvider } from '@/core/presenters/contexts/postMessage/provider';
import './style.css'

export const Root: React.FC = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <MessageCommunicationProvider>
        <RootProviders>
          <RootRoutesComponent />
        </RootProviders>
      </MessageCommunicationProvider>
    </BrowserRouter>
  </ErrorBoundary>
);
