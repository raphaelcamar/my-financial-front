/* eslint-disable no-nested-ternary */
import React, { ReactElement, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { BodyTable, Container, HeaderTable, WrapperBody, WrapperSkeletons } from './styles';
import { TableRow, AccordionTableRow, AddTransactionDrawer } from '@/transaction/ui/components/molecules';
import { useAccessContext } from '@/user/presenters';
import { useSpentsAndRevenuesContext } from '@/transaction/presenters/contexts/spents-and-revenues/context';
import { Hide, Skeleton, Tbody, Typography } from '@/core/ui/components/atoms';
import { Button, EmptyState } from '@/core/ui/components/molecules';

export const TableTransactions = (): ReactElement => {
  const { getTransactions, transactions, transactionLoader, setTransactionLoader, filter } =
    useSpentsAndRevenuesContext();
  const { enqueueSnackbar } = useSnackbar();
  const { currentWallet } = useAccessContext();

  const [openModal, setOpenModal] = useState<boolean>(false);

  const fetchTransactions = async (): Promise<void> => {
    try {
      await getTransactions(currentWallet.id, filter);
    } catch (err) {
      enqueueSnackbar(err?.message || 'Não foi possível buscar as transações. Tente novamente mais tarde', {
        variant: 'error',
      });
    } finally {
      setTransactionLoader(false);
    }
  };

  useEffect(() => {
    if (currentWallet) fetchTransactions();
  }, [currentWallet]);

  return (
    <Container>
      <HeaderTable>
        <Typography size="xlarge" weight={700}>
          Atividades recentes
        </Typography>
        <Button onClick={() => setOpenModal(true)}>Adicionar</Button>
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
          <Tbody>
            <WrapperBody>
              {transactions.map(transaction => (
                <td key={transaction._id}>
                  <Hide breakpoint="sm" direction="down">
                    <TableRow transaction={transaction} />
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
      <AddTransactionDrawer open={openModal} setOpenModal={setOpenModal} />
    </Container>
  );
};
