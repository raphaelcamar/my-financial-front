import React from 'react';
import { Typography } from '@/core/ui/components/atoms';
import { BottomCard, HeaderCard } from '@/tag/ui/components/atoms';
import { StyledPaper } from './styles';
import { Tag } from '@/tag/domain/entities';
import { ColorProps } from '@/main/styled';

interface ITagCard {
  tag: Tag;
}

export const TagCard: React.FC<ITagCard> = ({ tag }) => (
  <StyledPaper density={1}>
    <HeaderCard color={tag?.color as keyof ColorProps} title={tag?.title} onDelete={() => null} onEdit={() => null} />
    <Typography>{tag?.description}</Typography>
    <BottomCard createdAt={tag?.createdAt} isInactive={!!tag?.inactivatedAt} />
  </StyledPaper>
);
