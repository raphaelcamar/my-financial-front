import React from 'react';
import { Typography } from '@/core/ui/components/atoms';
import { HeaderCard } from '@/tag/ui/components/molecules';
import { StyledPaper } from './styles';
import { BottomCard } from '@/tag/ui/components/atoms';

export const TagCard: React.FC = () => (
  <StyledPaper density={1}>
    <HeaderCard />
    <Typography>Tag de serviços de streaming</Typography>
    <BottomCard />
  </StyledPaper>
);
