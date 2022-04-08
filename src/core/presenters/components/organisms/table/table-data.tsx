/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { useTheme } from '@mui/material';
import {
  TableHead,
  TableCell,
  TableHeader,
  TableRow,
  Grid,
  Table,
  TableContainer,
  TableBody,
  Typography,
} from '../../atoms';
import { useStyles } from './styles';
import { Icon } from '@/core/presenters/components/atoms';

type TableHeadProps = {
  sorteable?: boolean;
  title: string;
};

interface ITableData {
  dataTitles?: TableHeadProps[];
}

export const TableData: React.FC<ITableData> = ({ dataTitles, children }) => {
  const classes = useStyles();

  const theme = useTheme();

  return (
    <TableContainer className={classes.tableContainer}>
      <Table sx={{ minWidth: 750 }}>
        <TableHead className={classes.tableHead} role="grid" aria-colcount={5}>
          <TableRow>
            {dataTitles?.map(dataTitle => (
              <TableCell size="medium" className={classes.root}>
                <div className={classes.container}>
                  <Typography variant="body1">{dataTitle.title}</Typography>
                  {dataTitle?.sorteable && (
                    <div className={classes.wrapperIcons}>
                      <Icon icon="miniArrowUp" />
                      <Icon icon="miniArrowDown" />
                    </div>
                  )}
                </div>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  );
};
