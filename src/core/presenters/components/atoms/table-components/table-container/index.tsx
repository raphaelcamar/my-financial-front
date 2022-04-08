import React from 'react';
import { TableContainer as MuiTableContainer, TableContainerProps } from '@mui/material';
import { useStyles } from './styles';

export const TableContainer: React.FC<TableContainerProps> = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <MuiTableContainer className={classes.container} {...props}>
      {children}
    </MuiTableContainer>
  );
};
