import React, { useEffect, useState } from 'react';
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
import { Modal, Td, Tr, Typography } from '@/core/presenters/components/atoms';
import { Chip, IconButton, WrapperLoader } from '@/core/presenters/components/molecules';

import { useTransactionContext } from '@/transaction/presenters/contexts';

import { tableHeaderData } from '@/transaction/presenters/utils/data';
import { Transaction } from '@/transaction/domain';

export const TableContainer: React.FC = () => {
  const { getTransactions, transactions, transactionLoader } = useTransactionContext();

  const [openModal, setOpenModal] = useState<boolean>(false);

  const getTransactionsActualDate = async () => {
    const start = formatDate(monthStartDate(new Date()), 'dd/MM/yyyy');
    const limit = formatDate(new Date(), 'dd/MM/yyyy');
    const filter: Transaction.Filter = { limit, start };

    await getTransactions(filter);
  };

  useEffect(() => {
    getTransactionsActualDate();
  }, []);

  return (
    <WrapperLoader loading={transactionLoader} sizeLoading={35}>
      <Modal closeModal={() => setOpenModal(false)} open={openModal} title="Deseja excluir a transação?">
        asdasd
      </Modal>
      <Container>
        <TableData dataTitles={tableHeaderData}>
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
                  {formatDateBR(String(transaction?.billedAt)) || '-'}
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
              <Td width={10}>
                <WrapperActionTableButtons>
                  <IconButton
                    onClick={() => null}
                    icon="pen"
                    color="warning"
                    shade="400"
                    padding={[8, 9]}
                    iconProps={{ color: 'grey', shade: '50', size: 10 }}
                  />
                  <IconButton
                    onClick={() => setOpenModal(true)}
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
