import React from 'react';
import { TableRow as MuiTableRow, TableRowProps } from '@mui/material';
import { useStyles } from './styles';

export const TableRow: React.FC<TableRowProps> = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <MuiTableRow className={classes.container} {...props}>
      {children}
    </MuiTableRow>
  );
};
