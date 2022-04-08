import { TableBody as MuiTableBody, TableBodyProps } from '@mui/material';
import React from 'react';
import { useStyles } from './styles';

export const TableBody: React.FC<TableBodyProps> = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <MuiTableBody className={classes.container} {...props}>
      {children}
    </MuiTableBody>
  );
};
