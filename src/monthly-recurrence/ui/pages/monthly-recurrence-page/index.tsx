import React from 'react';
import { FilterAndAddRecurrenceRow, RecurrenceCards, TagList } from '@/monthly-recurrence/ui/components/organisms';
import { BaseGrid } from '@/core/ui/components/atoms';

export const MonthlyRecurrencePage: React.FC = () => (
  <BaseGrid>
    <FilterAndAddRecurrenceRow />
    <TagList />
    <RecurrenceCards />
    <div>Teste 4</div>
  </BaseGrid>
);

export default MonthlyRecurrencePage;
