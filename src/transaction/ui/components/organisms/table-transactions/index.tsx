import React, { Fragment, ReactElement, useEffect } from 'react';
import { Button } from '@raphaelcamar/ui-lib';
import { useSnackbar } from 'notistack';
import { BodyTable, Container, HeaderTable, THead, WrapperBody } from './styles';
import { Hide, Skeleton, Tbody, Td, Tr, Typography } from '@/core/ui/components/atoms';
import { TableRow, AccordionTableRow } from '../../molecules';
import { Transaction } from '@/transaction/domain';
import { useTransactionContext } from '@/transaction/presenters/contexts';
import { monthStartDate } from '@/core/utils';
import { useAccessContext } from '@/user/presenters';

export const TableTransactions = (): ReactElement => {
  const { getTransactionsV2, transactions, transactionLoader } = useTransactionContext();
  const { enqueueSnackbar } = useSnackbar();
  const { currentWallet } = useAccessContext();

  const fetchTransactions = async (): Promise<void> => {
    try {
      const date = new Date();
      const start = monthStartDate(new Date());
      const limit = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      const filter: Transaction.Filter = { limit, start };

      await getTransactionsV2(filter, currentWallet.id);
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
            {transactionLoader ? (
              <>
                <td>
                  <Skeleton shade={200} height={64} borderRadius={8} />
                </td>
                <td>
                  <Skeleton shade={200} height={64} borderRadius={8} />
                </td>
                <td>
                  <Skeleton shade={200} height={64} borderRadius={8} />
                </td>
                <td>
                  <Skeleton shade={200} height={64} borderRadius={8} />
                </td>
                <td>
                  <Skeleton shade={200} height={64} borderRadius={8} />
                </td>
              </>
            ) : (
              <>
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
              </>
            )}
          </WrapperBody>
        </Tbody>
      </BodyTable>
    </Container>
  );
};
