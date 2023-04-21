/* eslint-disable no-nested-ternary */
import React, { ReactElement, useEffect } from 'react';
import { Button } from '@raphaelcamar/ui-lib';
import { useSnackbar } from 'notistack';
import { BodyTable, Container, HeaderTable, THead, WrapperBody, WrapperSkeletons } from './styles';
import { Hide, Skeleton, Tbody, Tr, Typography } from '@/core/ui/components/atoms';
import { TableRow, AccordionTableRow } from '@/transaction/ui/components/molecules';
import { Transaction } from '@/transaction/domain';
import { useAccessContext } from '@/user/presenters';
import { useSpentsAndRevenuesContext } from '@/transaction/presenters/contexts/spents-and-revenues/context';
import { EmptyState } from '@/core/ui/components/molecules';

export const TableTransactions = (): ReactElement => {
  const { getTransactions, transactions, transactionLoader, filter } = useSpentsAndRevenuesContext();
  const { enqueueSnackbar } = useSnackbar();
  const { currentWallet } = useAccessContext();

  const fetchTransactions = async (): Promise<void> => {
    try {
      await getTransactions(currentWallet.id, filter);
    } catch (err) {
      enqueueSnackbar(err?.message || 'Não foi possível buscar as transações. Tente novamente mais tarde', {
        variant: 'error',
      });
    }
  };

  useEffect(() => {
    if (currentWallet) fetchTransactions();
  }, [currentWallet]);

  const handleEdit = async (transaction: Transaction): Promise<void> => {
    try {
      // TODO
    } catch (err) {
      // TODO
    }
  };

  return (
    <Container>
      <HeaderTable>
        <Typography size="xlarge" weight={700}>
          Transações
        </Typography>
        <Button>Adicionar</Button>
      </HeaderTable>

      {transactionLoader ? (
        <WrapperSkeletons>
          <Skeleton shade={200} height={64} borderRadius={8} />
          <Skeleton shade={200} height={64} borderRadius={8} />
          <Skeleton shade={200} height={64} borderRadius={8} />
          <Skeleton shade={200} height={64} borderRadius={8} />
        </WrapperSkeletons>
      ) : transactions?.length > 0 ? (
        <BodyTable>
          <THead>
            <Tr>
              <td>
                <Typography weight={600}>Tipo</Typography>
              </td>
            </Tr>
            <Tr>
              <td>
                <Typography weight={600}>Observação</Typography>
              </td>
            </Tr>
            <Tr>
              <td>
                <Typography weight={600}>Status</Typography>
              </td>
            </Tr>
            <Tr>
              <td>
                <Typography weight={600}>Tópico</Typography>
              </td>
            </Tr>
            <Tr>
              <td>
                <Typography weight={600}>Valor</Typography>
              </td>
            </Tr>
            <Tr>
              <td>
                <Typography weight={600}>Ações</Typography>
              </td>
            </Tr>
          </THead>
          <Tbody>
            <WrapperBody>
              {transactions.map(transaction => (
                <td key={transaction._id}>
                  <Hide breakpoint="sm" direction="down">
                    <TableRow handleEdit={handleEdit} transaction={transaction} />
                  </Hide>
                  <Hide breakpoint="sm" direction="up">
                    <AccordionTableRow transaction={transaction} />
                  </Hide>
                </td>
              ))}
            </WrapperBody>
          </Tbody>
        </BodyTable>
      ) : (
        <EmptyState message="Você não possui transações neste mês" />
      )}
    </Container>
  );
};
