import { SnackbarProvider } from 'notistack';
import React from 'react';
import { useStyles } from './styles';

export const NotistackProvider: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <SnackbarProvider
      classes={{
        variantSuccess: classes.variantSuccess,
        variantError: classes.variantError,
        variantInfo: classes.variantInfo,
        variantWarning: classes.variantWarning,
      }}
    >
      {children}
    </SnackbarProvider>
  );
};
