import { Table as MuiTable, TableProps } from '@mui/material';
import React from 'react';
import { useStyles } from './styles';

export const Table: React.FC<TableProps> = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <MuiTable stickyHeader className={classes.container} {...props}>
      {children}
    </MuiTable>
  );
};
