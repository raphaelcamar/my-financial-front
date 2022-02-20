import React, { createContext, useState } from 'react';

import { ThemeProvider as MuiTheme, Theme } from '@mui/material/styles';

import { main, dark } from './themes';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const THEMES: any = {
  main,
  dark,
};

const ThemeContext = createContext({});

export const ThemeProvider: React.FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(main);

  const changeTheme = (theme: string): void => {
    setCurrentTheme(THEMES[theme]);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
      <MuiTheme theme={currentTheme}>{children}</MuiTheme>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
