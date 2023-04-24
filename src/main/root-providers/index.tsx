import React from 'react';
import { StyledThemeProvider, NotistackProvider, SocketProvider } from '@/core/presenters/contexts';
import { AccessProvider } from '@/user/presenters/contexts/access';

export const RootProviders: React.FC = ({ children }) => (
  <StyledThemeProvider>
    <NotistackProvider>
      <AccessProvider>
        <SocketProvider>{children}</SocketProvider>
      </AccessProvider>
    </NotistackProvider>
  </StyledThemeProvider>
);
