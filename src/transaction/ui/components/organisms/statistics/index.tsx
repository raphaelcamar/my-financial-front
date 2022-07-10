import React, { useEffect } from 'react';
import { CardStatistic } from '@/transaction/ui/components/molecules';
import { Container } from './styles';
import { useTransactionContext } from '@/transaction/presenters/contexts';

export const Statistics: React.FC = () => {
  const { filter, statistic, getStatisticsByFilter } = useTransactionContext();

  const getStatistics = async () => {
    if (filter) {
      await getStatisticsByFilter();
    }
  };

  useEffect(() => {
    getStatistics();
  }, [filter]);

  return (
    <Container>
      <CardStatistic
        title="Total de gastos"
        description="01/01/2021 à 01/01/2021"
        price={5000}
        icon="recurrencyValue"
      />
      <CardStatistic
        title="Maior gasto"
        description="Bola nike final copa do mundo 2006"
        price={5138}
        icon="arrowLimit"
      />
      <CardStatistic title="Média de gasto" description="01/01/2021 à 01/01/2021" price={5000} icon="balance" />
      <CardStatistic title="Total de todas as transações" description="Dia 14/03/1999" price={400000} icon="moneyBag" />
    </Container>
  );
};
