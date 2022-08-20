import React, { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { CardStatistic } from '@/transaction/ui/components/molecules';
import { Container } from './styles';
import { useTransactionContext } from '@/transaction/presenters/contexts';
import { WrapperLoader } from '@/core/ui/components/molecules';

export const Statistics: React.FC = () => {
  const { filter, statistic, getStatisticsByFilter } = useTransactionContext();
  const [loading, setLoading] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();

  const getStatistics = async () => {
    if (filter) {
      try {
        setLoading(true);
        await getStatisticsByFilter(filter);
      } catch (err) {
        enqueueSnackbar(err?.message, {
          variant: 'error',
        });
      } finally {
        setLoading(false);
      }
    }
  };

  const getDateDescription = (start, limit) => {
    if (start && limit) {
      return `${start} à ${limit}`;
    }
    return '-';
  };

  useEffect(() => {
    getStatistics();
  }, [filter]);

  return (
    <WrapperLoader loading={loading} size={15} color="primary">
      <Container>
        <CardStatistic
          title="Total de gastos"
          description={getDateDescription(statistic?.totalFilter?.filter?.start, statistic?.totalFilter?.filter?.limit)}
          price={statistic?.totalFilter?.value}
          icon="recurrencyValue"
        />

        <CardStatistic
          title="Maior gasto"
          description={statistic?.mostSpent?.description || '-'}
          price={statistic?.mostSpent?.value}
          icon="arrowLimit"
        />
        <CardStatistic
          title="Média de gasto"
          description={getDateDescription(
            statistic?.averageSpent?.filter?.start,
            statistic?.averageSpent?.filter?.limit
          )}
          price={statistic?.averageSpent?.value}
          icon="balance"
        />
        <CardStatistic
          title="Total da carteira"
          description="Total de todas as transações"
          price={statistic?.total}
          icon="moneyBag"
          allowNegative
          isNegative={statistic?.total < 0}
        />
      </Container>
    </WrapperLoader>
  );
};
