import React, { ReactElement } from 'react';
import { Container, Highlight, Indicators, WrapperGridItem } from './styles';
import { IndicatorCard } from '@/transaction/ui/components/atoms';
import { TableTransactions, Filter } from '@/transaction/ui/components/organisms';
import { Typography } from '@/core/ui/components/atoms';
import { TransactionProvider } from '@/transaction/presenters/contexts';

export const SpentsAndRevenuesPage = (): ReactElement => (
  <TransactionProvider>
    <Container>
      <WrapperGridItem>
        <Filter />
        <TableTransactions />
      </WrapperGridItem>
      <WrapperGridItem>
        <Indicators>
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
        </Indicators>
        <div>Histórico</div>
      </WrapperGridItem>
    </Container>
  </TransactionProvider>
);
