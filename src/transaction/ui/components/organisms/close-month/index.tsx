import React, { ReactElement, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { Container } from './styles';
import { useSpentsAndRevenuesContext } from '@/transaction/presenters/contexts/spents-and-revenues/context';
import { MonthlyClosingRepositoryData } from '@/transaction/infra/http/monthly-closing-repository-data';
import { useAccessContext } from '@/user/presenters';
import { createFilter } from '@/transaction/utils';
import { delay } from '@/core/utils';
import { Button } from '@/core/ui/components/molecules';

export const CloseMonth = (): ReactElement => {
  const { filter, closeMonth } = useSpentsAndRevenuesContext();
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

  const fetchCloseMonth = async (): Promise<void> => {
    try {
      setLoading(true);

      const date = new Date(filter?.start);

      await closeMonth(date.getMonth() + 1, date.getFullYear(), currentWallet.id);
      await fetchIfIsClosed();

      enqueueSnackbar('Mês fechado com sucesso!', { variant: 'success' });
    } catch (err) {
      enqueueSnackbar(err?.message || 'Não foi possível fechar o mês', { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIfIsClosed();
  }, [filter, currentWallet]);

  return (
    <Container>
      <Button
        aria-label={isClosed ? 'Mês fechado' : 'Fechar mês'}
        style={{ width: '100%' }}
        disabled={isClosed || loading}
        loading={loading}
        colorLoading={isClosed || loading ? 'primary' : 'grey'}
        shadeLoading={500}
        onClick={() => fetchCloseMonth()}
      >
        {isClosed ? 'Mês fechado' : 'Fechar mês'}
      </Button>
    </Container>
  );
};
