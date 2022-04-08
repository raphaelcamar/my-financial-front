import React from 'react';
import { TableHead as MuiTableHead, TableHeadProps } from '@mui/material';
import { useStyles } from './styles';

export const TableHead: React.FC<TableHeadProps> = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <MuiTableHead className={classes.container} {...props}>
      {children}
    </MuiTableHead>
  );
};
