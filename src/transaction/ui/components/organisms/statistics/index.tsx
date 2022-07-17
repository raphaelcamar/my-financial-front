import React, { useEffect } from 'react';
import { CardStatistic } from '@/transaction/ui/components/molecules';
import { Container } from './styles';
import { useTransactionContext } from '@/transaction/presenters/contexts';

export const Statistics: React.FC = () => {
  const { filter, statistic, getStatisticsByFilter } = useTransactionContext();

  const getStatistics = async () => {
    if (filter) {
      await getStatisticsByFilter(filter);
    }
  };

  useEffect(() => {
    getStatistics();
  }, [filter]);

  return (
    <Container>
      <CardStatistic
        title="Total de gastos"
        description={`${statistic?.totalFilter?.filter?.start} à ${statistic?.totalFilter?.filter?.limit}`}
        price={statistic?.totalFilter?.value}
        icon="recurrencyValue"
      />
      <CardStatistic
        title="Maior gasto"
        description={statistic?.mostSpent?.description}
        price={statistic?.mostSpent?.value}
        icon="arrowLimit"
      />
      <CardStatistic
        title="Média de gasto"
        description={`${statistic?.averageSpent?.filter?.start} à ${statistic?.averageSpent?.filter?.limit}`}
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
  );
};
