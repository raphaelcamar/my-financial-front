import React from 'react';
import { FilterAndAddRecurrenceRow, RecurrenceCards, TagList } from '@/monthly-recurrence/ui/components/organisms';
import { BaseGrid } from '@/core/ui/components/atoms';
import { WrapperleftContainer } from './styles';
import { MonthlyRecurrenceIndicators } from '../../components/molecules';
import { MonthlyRecurrenceProvider } from '@/monthly-recurrence/presenters/contexts/monthly-recurrence-context';

export const MonthlyRecurrencePage: React.FC = () => (
  <MonthlyRecurrenceProvider>
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
  </MonthlyRecurrenceProvider>
);

export default MonthlyRecurrencePage;
