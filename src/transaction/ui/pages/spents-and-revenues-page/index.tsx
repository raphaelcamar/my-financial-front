import React, { ReactElement } from 'react';
import { WrapperGridItem } from './styles';
import { TableTransactions, Filter, Indicators, CloseMonth } from '@/transaction/ui/components/organisms';
import { SpentsAndRevenuesProvider } from '@/transaction/presenters/contexts/spents-and-revenues/provider';
import { BaseGrid } from '@/core/ui/components/atoms';

export const SpentsAndRevenuesPage = (): ReactElement => (
  <SpentsAndRevenuesProvider>
    <BaseGrid>
      <WrapperGridItem>
        <Filter />
        <TableTransactions />
      </WrapperGridItem>
      <WrapperGridItem>
        <CloseMonth />
        <Indicators />
      </WrapperGridItem>
    </BaseGrid>
  </SpentsAndRevenuesProvider>
);
