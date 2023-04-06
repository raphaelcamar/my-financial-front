import React, { ReactElement } from 'react';
import { Container, FilterContainer, Indicators, WrapperGridItem } from './styles';
import { FilterYear, FilterMonth } from '@/transaction/ui/components/molecules';
import { IndicatorCard } from '@/transaction/ui/components/atoms';

export const SpentsAndRevenuesPage = (): ReactElement => (
  <Container>
    <WrapperGridItem>
      <FilterContainer>
        <FilterMonth />
        <FilterYear />
      </FilterContainer>
      <div style={{ background: 'red' }}>Tabela</div>
    </WrapperGridItem>
    <WrapperGridItem>
      <Indicators>
        <IndicatorCard
          date={new Date()}
          description="Teste de descrição de entrada"
          percentage={48.5}
          type="ENTRANCE"
          value={419}
        />
        <IndicatorCard
          date={new Date()}
          description="Teste de descrição de saídas"
          percentage={4008.5}
          type="SPENT"
          value={419}
        />
      </Indicators>
      <div style={{ background: 'blue' }}>Hitórico</div>
    </WrapperGridItem>
  </Container>
);
