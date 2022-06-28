import React, { useEffect } from 'react';
import { useStyles } from './styles';
import { TableData } from '@/core/presenters/components/organisms/table/table-data';
import { Td, Tr, Typography } from '@/core/presenters/components/atoms';
import { Chip } from '@/core/presenters/components/molecules';

import { useTransactionContext } from '@/transaction/presenters/contexts';
import { formatCurrency, formatTopic, formatType, formatDate } from '@/core/presenters/utils';

const tableHead = [
  {
    title: 'Tópico',
    sorteable: true,
  },
  {
    title: 'Anotação',
    sorteable: true,
  },
  {
    title: 'Data',
    sorteable: true,
  },
  {
    title: 'Tipo',
    sorteable: true,
  },
  {
    title: 'Valor',
    sorteable: true,
  },
  {
    title: 'Total',
    sorteable: true,
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
          <Tr>
            <Td width={10}>
              <Chip color="primary">{formatTopic(transaction?.topic) || '-'}</Chip>
            </Td>
            <Td width={350}>
              <Typography size="small" color="grey">
                {transaction?.anotation}
              </Typography>
            </Td>
            <Td width={20}>
              <Typography size="small" color="grey">
                {formatDate(String(transaction?.billedAt)) || '-'}
              </Typography>
            </Td>
            <Td width={10}>
              <Chip color={transaction?.type === 'ENTRANCE' ? 'success' : 'error'}>
                {formatType(transaction?.type) || '-'}
              </Chip>
            </Td>
            <Td width={10}>
              <Typography size="small" color="grey">
                {formatCurrency(transaction?.cost) || '-'}
              </Typography>
            </Td>
            <Td width={10}>
              <Typography size="small" color="grey">
                {formatCurrency(transaction.total) || '-'}
              </Typography>
            </Td>
          </Tr>
        ))}
      </TableData>
    </div>
  );
};
