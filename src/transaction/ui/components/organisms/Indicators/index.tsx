import React, { ReactElement } from 'react';
import { Container, Highlight } from './styles';
import { IndicatorCard } from '@/transaction/ui/components/atoms';
import { Typography } from '@/core/ui/components/atoms';
import { useTransactionContext } from '@/transaction/presenters/contexts';

export const Indicators = (): ReactElement => {
  const { getStatisticsByFilter } = useTransactionContext();

  return (
    <Container>
      <IndicatorCard
        date={new Date()}
        description={
          <Typography size="xsmall" weight={400}>
            <Highlight color="success">Você obteve $ 35,00</Highlight> a mais de entradas nesse mês. Parabéns!
          </Typography>
        }
        percentage={48.5}
        type="ENTRANCE"
        value={419}
      />
      <IndicatorCard
        date={new Date()}
        description={
          <Typography size="xsmall" weight={400}>
            <Highlight color="success">Você obteve $ 35,00</Highlight> a mais de entradas nesse mês. Parabéns!
          </Typography>
        }
        percentage={4008.5}
        type="SPENT"
        value={419}
      />
    </Container>
  );
};
