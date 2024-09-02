/* eslint-disable no-nested-ternary */
import React, { ReactElement, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import * as S from './styles';
import { TableRow, AccordionTableRow, AddTransactionDrawer } from '@/transaction/ui/components/molecules';
import { useAccessContext } from '@/user/presenters';
import { useSpentsAndRevenuesContext } from '@/transaction/presenters/contexts/spents-and-revenues/context';
import { Hide, Skeleton, Tbody, Typography } from '@/core/ui/components/atoms';
import { Button, EmptyState } from '@/core/ui/components/molecules';
import { Pagination } from '@/core/ui/components/organisms';

export const TableTransactions = (): ReactElement => {
  const { getTransactions, transactions, transactionLoader, setTransactionLoader, filter } =
    useSpentsAndRevenuesContext();
  const { enqueueSnackbar } = useSnackbar();
  const { currentWallet } = useAccessContext();

  const [openModal, setOpenModal] = useState<boolean>(false);

  const fetchTransactions = async (pageToFetch?: number): Promise<void> => {
    try {
      await getTransactions(currentWallet.id, filter, pageToFetch);
    } catch (err) {
      enqueueSnackbar(err?.message || 'Não foi possível buscar as transações. Tente novamente mais tarde', {
        variant: 'error',
      });
    } finally {
      setTransactionLoader(false);
    }
  };

  useEffect(() => {
    if (currentWallet) fetchTransactions(1);
  }, [currentWallet]);

  return (
    <>
      <S.Container>
        <S.Table>
          <S.HeaderTable>
            <Typography size="xlarge" weight={700}>
              Atividades recentes
            </Typography>
            <Button onClick={() => setOpenModal(true)}>Adicionar</Button>
          </S.HeaderTable>
          {transactionLoader ? (
            <S.WrapperSkeletons>
              <Skeleton shade={200} height={64} borderRadius={8} />
              <Skeleton shade={200} height={64} borderRadius={8} />
              <Skeleton shade={200} height={64} borderRadius={8} />
              <Skeleton shade={200} height={64} borderRadius={8} />
              <Skeleton shade={200} height={64} borderRadius={8} />
              <Skeleton shade={200} height={64} borderRadius={8} />
            </S.WrapperSkeletons>
          ) : transactions?.length > 0 ? (
            <S.BodyTable>
              <Tbody>
                <S.WrapperBody>
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
                </S.WrapperBody>
              </Tbody>
            </S.BodyTable>
          ) : (
            <EmptyState message="Você não possui transações neste mês" />
          )}
        </S.Table>
        <Pagination
          currentPage={filter.pagination?.currentPage || 1}
          totalPages={filter.pagination?.totalPages || 1}
          onChangePage={pageToFetch => fetchTransactions(pageToFetch)}
        />
      </S.Container>

      <AddTransactionDrawer open={openModal} setOpenModal={setOpenModal} />
    </>
  );
};
