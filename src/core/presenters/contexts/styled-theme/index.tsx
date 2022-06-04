import { ThemeProvider } from 'styled-components';
import React from 'react';
import { mainTheme } from './themes/main';

export const StyledThemeProvider = ({ children }) => <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>;
