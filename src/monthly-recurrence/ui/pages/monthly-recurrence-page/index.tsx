import React from 'react';
import { FilterAndAddRecurrenceRow, RecurrenceCards } from '@/monthly-recurrence/ui/components/organisms';
import { BaseGrid } from '@/core/ui/components/atoms';

export const MonthlyRecurrencePage: React.FC = () => (
  <BaseGrid>
    <FilterAndAddRecurrenceRow />
    <div>Teste 2</div>
    <RecurrenceCards />
    <div>Teste 4</div>
  </BaseGrid>
);

export default MonthlyRecurrencePage;
