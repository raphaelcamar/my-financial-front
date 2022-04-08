import React from 'react';
import { TableHead as MuiTableHeader } from '@mui/material';
import { useStyles } from './styles';

export const TableHeader: React.FC = ({ children }) => {
  const classes = useStyles();
  return <MuiTableHeader className={classes.container}>{children}</MuiTableHeader>;
};
