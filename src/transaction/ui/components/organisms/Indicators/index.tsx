import React, { ReactElement, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { Container } from './styles';
import { IndicatorCard } from '@/transaction/ui/components/atoms';
import { Skeleton, Typography } from '@/core/ui/components/atoms';
import { useSpentsAndRevenuesContext } from '@/transaction/presenters/contexts/spents-and-revenues/context';
import { useAccessContext } from '@/user/presenters';
import { delay } from '@/core/utils';

export const Indicators = (): ReactElement => {
  const { getIndicators, filter, indicators } = useSpentsAndRevenuesContext();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState<boolean>(false);
  const { currentWallet } = useAccessContext();

  const fetchIndicators = async (): Promise<void> => {
    try {
      setLoading(true);
      await delay(2500);
      await getIndicators(currentWallet.id, filter);
    } catch (err) {
      enqueueSnackbar(err?.message || 'Não foi possível trazer o indicadores.', { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentWallet) {
      fetchIndicators();
    }
  }, [currentWallet, filter]);

  return (
    <Container>
      {loading ? (
        <>
          <div style={{ width: '100%' }}>
            <Skeleton height="300px" shade={200} borderRadius={12} />
          </div>
          <div style={{ width: '100%' }}>
            <Skeleton height="300px" shade={200} borderRadius={12} />
          </div>
        </>
      ) : (
        <>
          <IndicatorCard
            date={new Date(filter.start)}
            description={
              <Typography size="xsmall" weight={400}>
                Valores relaciocnados à entradas do mês corrente
              </Typography>
            }
            percentage={indicators?.entrance?.percentage}
            type="ENTRANCE"
            value={indicators?.entrance?.differenceValue}
          />
          <IndicatorCard
            date={new Date(filter.start)}
            description={
              <Typography size="xsmall" weight={400}>
                Valores relaciocnados à saídas do mês corrente
              </Typography>
            }
            percentage={indicators?.spent?.percentage}
            type="SPENT"
            value={indicators?.spent?.differenceValue}
          />
        </>
      )}
    </Container>
  );
};
