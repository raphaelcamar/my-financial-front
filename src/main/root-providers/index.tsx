import React from 'react';
import { StyledThemeProvider, NotistackProvider } from '@/core/presenters/contexts';
import { AccessAndAuthProvider } from '@/access-and-auth/presenters/contexts';

export const RootProviders: React.FC = ({ children }) => (
  <StyledThemeProvider>
    <NotistackProvider>
      <AccessAndAuthProvider>{children}</AccessAndAuthProvider>
    </NotistackProvider>
  </StyledThemeProvider>
);
