import React, { ReactElement, useEffect, useState } from 'react';
import { Button } from '@raphaelcamar/ui-lib';
import { useSnackbar } from 'notistack';
import { BodyTable, Container, HeaderTable, THead, WrapperBody } from './styles';
import { Hide, Skeleton, Tbody, Td, Typography } from '@/core/ui/components/atoms';
import { TableRow, AccordionTableRow } from '../../molecules';
import { Transaction } from '@/transaction/domain';
import { useTransactionContext } from '@/transaction/presenters/contexts';
import { delay, monthStartDate } from '@/core/utils';
import { useAccessContext } from '@/user/presenters';

export const TableTransactions = (): ReactElement => {
  const { getTransactionsV2, transactions } = useTransactionContext();
  const { enqueueSnackbar } = useSnackbar();
  const { currentWallet } = useAccessContext();

  const [loading, setLoading] = useState<boolean>(false);

  const fetchTransactions = async (): Promise<void> => {
    try {
      setLoading(true);
      const start = monthStartDate(new Date());
      const limit = new Date();
      const filter: Transaction.Filter = { limit, start };

      await getTransactionsV2(filter, currentWallet.id);
    } catch (err) {
      enqueueSnackbar(err?.message || 'Não foi possível buscar as transações. Tente novamente mais tarde', {
        variant: 'error',
      });
    } finally {
      setLoading(false);
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

  const handleDelete = async (transaction: Transaction): Promise<void> => {
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
            {loading ? (
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
                      <TableRow handleEdit={handleEdit} handleDelete={handleDelete} transaction={transaction} />
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
