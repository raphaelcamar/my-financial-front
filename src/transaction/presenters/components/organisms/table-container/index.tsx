import React, { useEffect } from 'react';
import { useStyles } from './styles';
import { TableData } from '@/core/presenters/components/organisms/table/table-data';
import { Chip, TableCell, TableRow, Typography } from '@/core/presenters/components/atoms';

import { useTransactionContext } from '@/transaction/presenters/contexts';
import { formatCurrency, formatTopic, formatType, formatDate } from '@/core/presenters/utils';

const tableHead = [
  {
    title: 'Tópico',
  },
  {
    title: 'Anotação',
  },
  {
    title: 'Data',
  },
  {
    title: 'Tipo',
  },
  {
    title: 'Valor',
  },
  {
    title: 'Total',
  },
];

export const TableContainer: React.FC = () => {
  const classes = useStyles();

  const { getTransactions, transactions } = useTransactionContext();

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div className={classes.container}>
      <TableData dataTitles={tableHead}>
        {transactions.map(transaction => (
          <TableRow>
            <TableCell width={10}>
              <Chip color="primary">{formatTopic(transaction?.topic) || '-'}</Chip>
            </TableCell>
            <TableCell width={350}>
              <Typography variant="body1">{transaction?.anotation}</Typography>
            </TableCell>
            <TableCell width={20}>
              <Typography variant="body1">{formatDate(String(transaction?.billedAt)) || '-'}</Typography>
            </TableCell>
            <TableCell width={10}>
              <Chip color={transaction?.type === 'ENTRANCE' ? 'success' : 'error'}>
                <Typography variant="body1">{formatType(transaction?.type) || '-'}</Typography>
              </Chip>
            </TableCell>
            <TableCell width={10}>
              <Typography variant="body1">{formatCurrency(transaction?.cost) || '-'}</Typography>
            </TableCell>
            <TableCell width={10}>
              <Typography variant="body1">{formatCurrency(transaction.total) || '-'}</Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableData>
    </div>
  );
};
