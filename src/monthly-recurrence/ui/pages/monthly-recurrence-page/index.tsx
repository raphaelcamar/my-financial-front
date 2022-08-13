import React from 'react';
import { FilterOption, MonthlyActions } from '@/monthly-recurrence/ui/components/organisms';
import { Container, Filter, MonthlyCards } from './styles';
import { MonthlyCard } from '../../components/organisms/monthly-card';
import { PlusItems } from '@/monthly-recurrence/ui/components/atoms';

export const MonthlyRecurrencePage: React.FC = () => (
  <Container>
    <Filter>
      <FilterOption />
      <MonthlyActions />
    </Filter>
    <MonthlyCards>
      <MonthlyCard />
      <MonthlyCard />
      <MonthlyCard />
      <MonthlyCard />
      <MonthlyCard />
      <MonthlyCard />
      <MonthlyCard />
      <PlusItems />
    </MonthlyCards>
  </Container>
);
