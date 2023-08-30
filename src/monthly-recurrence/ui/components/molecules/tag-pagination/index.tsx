import React, { ReactElement } from 'react';
import { Container, StyledIconButton, WrapperButtons } from './styles';
import { Icon, Typography } from '@/core/ui/components/atoms';

export const TagPagination = (): ReactElement => (
  <Container>
    <Typography color="grey" shade={500} weight={500} size="small">
      Mostrando 4 de 16 itens
    </Typography>
    <WrapperButtons>
      <StyledIconButton>
        <Icon icon="arrowLeft" color="primary" shade="500" size={12} />
      </StyledIconButton>
      <StyledIconButton>
        <Icon icon="arrowRight" color="primary" shade="500" size={12} />
      </StyledIconButton>
    </WrapperButtons>
  </Container>
);
