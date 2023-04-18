import React, { ReactElement } from 'react';
import { Container, WrapperGridItem } from './styles';
import { TableTransactions, Filter, Indicators } from '@/transaction/ui/components/organisms';
import { TransactionProvider } from '@/transaction/presenters/contexts';

export const SpentsAndRevenuesPage = (): ReactElement => (
  <TransactionProvider>
    <Container>
      <WrapperGridItem>
        <Filter />
        <TableTransactions />
      </WrapperGridItem>
      <WrapperGridItem>
        <Indicators />
        <div>Histórico</div>
      </WrapperGridItem>
    </Container>
  </TransactionProvider>
);
