import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import { FilterAddTable } from '@/transaction/presenters/components/atoms';
import { DrawerAddTransaction } from '@/transaction/presenters/components/organisms';
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
  const [openModal, setOpenModal] = useState<boolean>(false);

  const { getTransactions, transactions } = useTransactionContext();

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div className={classes.container}>
      {/* <FilterAddTable setOpenModal={() => setOpenModal(true)} buttonText="adicionar" /> */}
      <TableData dataTitles={tableHead}>
        {transactions.map(transaction => (
          <TableRow>
            <TableCell>
              <Chip color="primary">
                <Typography variant="body1">{formatTopic(transaction?.topic)}</Typography>
              </Chip>
            </TableCell>
            <TableCell>
              <Typography variant="body1">{transaction?.anotation}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">{formatDate(transaction?.billedAt as string)}</Typography>
            </TableCell>
            <TableCell>
              <Chip color={transaction?.type === 'ENTRANCE' ? 'success' : 'error'}>
                <Typography variant="body1">{formatType(transaction?.type)}</Typography>
              </Chip>
            </TableCell>
            <TableCell>
              <Typography variant="body1">{formatCurrency(transaction?.cost)}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">{formatCurrency(transaction.total)}</Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableData>

      <DrawerAddTransaction openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};
