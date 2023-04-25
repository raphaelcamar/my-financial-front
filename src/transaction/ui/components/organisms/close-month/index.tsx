import { Button } from '@raphaelcamar/ui-lib';
import React, { ReactElement, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { Container } from './styles';
import { useSpentsAndRevenuesContext } from '@/transaction/presenters/contexts/spents-and-revenues/context';
import { MonthlyClosingRepositoryData } from '@/transaction/infra/http/monthly-closing-repository-data';
import { useAccessContext } from '@/user/presenters';
import { createFilter } from '@/transaction/utils';
import { delay } from '@/core/utils';

export const CloseMonth = (): ReactElement => {
  const { filter } = useSpentsAndRevenuesContext();
  const { currentWallet } = useAccessContext();
  const { enqueueSnackbar } = useSnackbar();

  const [isClosed, setIsClosed] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchIfIsClosed = async (): Promise<void> => {
    try {
      setLoading(true);
      if (currentWallet && filter) {
        const repository = new MonthlyClosingRepositoryData();
        await delay(2500);
        const result = await repository.verify(createFilter(filter), currentWallet?.id);
        setIsClosed(result);
      }
    } catch (err) {
      enqueueSnackbar(err?.message || 'Não foi possível buscar o mês', { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIfIsClosed();
  }, [filter, currentWallet]);

  return (
    <Container>
      <Button style={{ width: '100%' }} disabled={isClosed || loading} loading={loading}>
        {isClosed ? 'Mês fechado' : 'Fechar mês'}
      </Button>
    </Container>
  );
};
