import React, { ReactElement } from 'react';
import { Container, WrapperGridItem } from './styles';
import { TableTransactions, Filter, Indicators, CloseMonth } from '@/transaction/ui/components/organisms';
import { SpentsAndRevenuesProvider } from '@/transaction/presenters/contexts/spents-and-revenues/provider';

export const SpentsAndRevenuesPage = (): ReactElement => (
  <SpentsAndRevenuesProvider>
    <Container>
      <WrapperGridItem>
        <Filter />
        <TableTransactions />
      </WrapperGridItem>
      <WrapperGridItem>
        <CloseMonth />
        <Indicators />
        <div>Histórico</div>
      </WrapperGridItem>
    </Container>
  </SpentsAndRevenuesProvider>
);
