import React from 'react';
import { Typography } from '@/core/ui/components/atoms';
import { BottomCard, HeaderCard } from '@/tag/ui/components/atoms';
import { StyledPaper } from './styles';
import { Tag } from '@/tag/domain/entities';

interface ITagCard {
  tag: Tag;
}

export const TagCard: React.FC<ITagCard> = ({ tag }) => (
  <StyledPaper density={1}>
    <HeaderCard />
    <Typography>Tag de serviços de streaming</Typography>
    <BottomCard />
  </StyledPaper>
);
