import React, { useEffect } from 'react';
import { Container } from './styles';
import { TableData } from '@/core/presenters/components/organisms';
import { Td, Tr, Typography } from '@/core/presenters/components/atoms';
import { Chip, WrapperLoader } from '@/core/presenters/components/molecules';

import { useTransactionContext } from '@/transaction/presenters/contexts';
import { formatCurrency, formatTopic, formatType, formatDate } from '@/core/presenters/utils';
import { tableHeaderData } from '@/transaction/presenters/utils/data';

export const TableContainer: React.FC = () => {
  const { getTransactions, transactions, transactionLoader } = useTransactionContext();

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <WrapperLoader loading={transactionLoader} sizeLoading={35}>
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
      </Container>
    </WrapperLoader>
  );
};
