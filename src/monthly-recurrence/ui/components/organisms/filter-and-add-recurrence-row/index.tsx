import React, { ReactElement } from 'react';
import { Container, GroupFilter, StyledButton, StyledIconButton } from './styles';
import { Input } from '@/core/ui/components/molecules';
import { Icon } from '@/core/ui/components/atoms';

export const FilterAndAddRecurrenceRow = (): ReactElement => (
  <Container>
    <GroupFilter>
      <Input label="Nome" />
      <Input label="Tag" />
      <StyledIconButton>
        <Icon icon="search" size={16} shade="500" color="primary" />
      </StyledIconButton>
    </GroupFilter>
    <StyledButton>Adicionar</StyledButton>
  </Container>
);
