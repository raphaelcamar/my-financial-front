import React, { ReactElement } from 'react';
import { StyledThemeProvider } from '@/core/presenters/contexts';

export const ProvideStyledTheme = (children: ReactElement): ReactElement => (
  <StyledThemeProvider>{children}</StyledThemeProvider>
);
