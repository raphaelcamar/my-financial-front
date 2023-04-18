import React, { ReactElement, useEffect } from 'react';
import { Button } from '@raphaelcamar/ui-lib';
import { useSnackbar } from 'notistack';
import { BodyTable, Container, HeaderTable, THead, WrapperBody } from './styles';
import { Hide, Skeleton, Tbody, Td, Typography } from '@/core/ui/components/atoms';
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
          <Td withoutLine>
            <Typography weight={600}>Tipo</Typography>
          </Td>
          <Td withoutLine>
            <Typography weight={600}>Observação</Typography>
          </Td>
          <Td withoutLine>
            <Typography weight={600}>Status</Typography>
          </Td>
          <Td withoutLine>
            <Typography weight={600}>Tópico</Typography>
          </Td>
          <Td withoutLine>
            <Typography weight={600}>Valor</Typography>
          </Td>
          <Td withoutLine>
            <Typography weight={600}>Ações</Typography>
          </Td>
        </THead>
        <Tbody>
          <WrapperBody>
            {transactionLoader ? (
              <>
                <Skeleton shade={200} height={64} borderRadius={8} />
                <Skeleton shade={200} height={64} borderRadius={8} />
                <Skeleton shade={200} height={64} borderRadius={8} />
                <Skeleton shade={200} height={64} borderRadius={8} />
                <Skeleton shade={200} height={64} borderRadius={8} />
              </>
            ) : (
              <>
                {transactions.map(transaction => (
                  <>
                    <Hide breakpoint="sm" direction="down">
                      <TableRow handleEdit={handleEdit} transaction={transaction} />
                    </Hide>
                    <Hide breakpoint="sm" direction="up">
                      <AccordionTableRow transaction={transaction} />
                    </Hide>
                  </>
                ))}
              </>
            )}
          </WrapperBody>
        </Tbody>
      </BodyTable>
    </Container>
  );
};
