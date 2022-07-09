/* eslint-disable no-return-await */
/* eslint-disable no-promise-executor-return */
import React, { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import {
  monthStartDate,
  formatCurrency,
  formatTopic,
  formatType,
  formatDate,
  formatDateBR,
} from '@/core/presenters/utils';
import { Container, WrapperActionTableButtons } from './styles';
import { TableData } from '@/core/presenters/components/organisms';
import { Td, Tr, Typography } from '@/core/presenters/components/atoms';
import { Chip, IconButton, WrapperLoader } from '@/core/presenters/components/molecules';

import { useTransactionContext } from '@/transaction/presenters/contexts';

import { tableHeaderData } from '@/transaction/utils/data';
import { ModalDeleteTransaction } from '@/transaction/ui/components/atoms';
import { Transaction } from '@/transaction/domain';

interface ITableContainer {
  handleEdit?: (transaction: Transaction) => void;
}

export const TableContainer: React.FC<ITableContainer> = ({ handleEdit }) => {
  const { getTransactions, deleteTransaction, transactions, transactionLoader } = useTransactionContext();
  const { enqueueSnackbar } = useSnackbar();

  const [deleteData, setDeleteData] = useState<Transaction.Data>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getTransactionsActualDate = async () => {
    const start = formatDate(monthStartDate(new Date()), 'dd/MM/yyyy');
    const limit = formatDate(new Date(), 'dd/MM/yyyy');
    const filter: Transaction.Filter = { limit, start };

    await getTransactions(filter);
  };

  useEffect(() => {
    getTransactionsActualDate();
  }, []);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await deleteTransaction(deleteData?._id);

      enqueueSnackbar('Transação deletada com sucesso!', {
        variant: 'success',
      });
    } catch (err) {
      enqueueSnackbar(err?.message || 'Não foi possível excluir a transação. Tente novamente depois', {
        variant: 'error',
      });
    } finally {
      setLoading(false);
      setDeleteData(null);
    }
  };

  return (
    <WrapperLoader loading={transactionLoader} size={15} color="primary">
      <ModalDeleteTransaction
        loading={loading}
        data={deleteData}
        openModal={!!deleteData}
        onClose={() => setDeleteData(null)}
        onSubmit={() => handleSubmit()}
      />
      <Container>
        <TableData dataTitles={tableHeaderData}>
          {transactions?.map(transaction => (
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
                  {transaction?.billedAt ? formatDateBR(String(transaction?.billedAt)) : '-'}
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
                <WrapperActionTableButtons>
                  <IconButton
                    onClick={() => handleEdit(transaction)}
                    icon="pen"
                    color="warning"
                    shade="400"
                    padding={[8, 9]}
                    iconProps={{ color: 'grey', shade: '50', size: 10 }}
                  />
                  <IconButton
                    onClick={() => setDeleteData(transaction)}
                    icon="trash"
                    color="error"
                    shade="500"
                    padding={[8, 9]}
                    iconProps={{ color: 'grey', shade: '50', size: 10 }}
                  />
                </WrapperActionTableButtons>
              </Td>
            </Tr>
          ))}
        </TableData>
      </Container>
    </WrapperLoader>
  );
};
