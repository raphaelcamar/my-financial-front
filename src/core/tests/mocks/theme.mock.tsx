import React, { ReactElement } from 'react';
import { ThemeProvider } from '@mui/material/styles';

import { main } from '@/core/presenters/contexts/theme/themes/main';

export const ProvideTheme = (children: ReactElement): ReactElement => (
  <ThemeProvider theme={main}>{children}</ThemeProvider>
);
