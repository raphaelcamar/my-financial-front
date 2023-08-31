import React from 'react';
import { FilterAndAddRecurrenceRow, RecurrenceCards, TagList } from '@/monthly-recurrence/ui/components/organisms';
import { BaseGrid } from '@/core/ui/components/atoms';
import { WrapperleftContainer } from './styles';
import { MonthlyRecurrenceIndicators } from '../../components/molecules';

export const MonthlyRecurrencePage: React.FC = () => (
  <BaseGrid>
    <WrapperleftContainer>
      <FilterAndAddRecurrenceRow />
      <RecurrenceCards />
    </WrapperleftContainer>
    <WrapperleftContainer>
      <TagList />
      <MonthlyRecurrenceIndicators />
    </WrapperleftContainer>
  </BaseGrid>
);

export default MonthlyRecurrencePage;
