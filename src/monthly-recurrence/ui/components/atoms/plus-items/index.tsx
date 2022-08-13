import React from 'react';
import { Typography } from '@/core/ui/components/atoms';
import { StyledPaper } from './styles';

export const PlusItems: React.FC = () => (
  <StyledPaper density={1}>
    <Typography color="primary" weight={800}>
      Mais 34 itens
    </Typography>
  </StyledPaper>
);
