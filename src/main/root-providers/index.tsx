import React from 'react';
import { StyledThemeProvider, NotistackProvider } from '@/core/presenters/contexts';
import { AccessProvider } from '@/user/presenters/contexts/access';

export const RootProviders: React.FC = ({ children }) => (
  <StyledThemeProvider>
    <NotistackProvider>
      <AccessProvider>{children}</AccessProvider>
    </NotistackProvider>
  </StyledThemeProvider>
);
