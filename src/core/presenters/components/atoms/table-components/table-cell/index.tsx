import React from 'react';
import { TableCell as MuiTableCell, TableCellProps } from '@mui/material';
import { useStyles } from './styles';

export const TableCell: React.FC<TableCellProps> = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <MuiTableCell align="left" sortDirection="asc" className={classes.container} {...props}>
      {children}
    </MuiTableCell>
  );
};
