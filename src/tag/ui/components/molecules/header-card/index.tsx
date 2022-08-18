import React from 'react';
import { Typography } from '@/core/ui/components/atoms';
import { Header, Title } from './styles';
import { IconButton } from '@/core/ui/components/molecules';
import { CircleColor } from '@/tag/ui/components/atoms';

export const HeaderCard: React.FC = () => (
  <Header>
    <Title>
      <CircleColor />
      <Typography size="normal" weight={700}>
        Netflix
      </Typography>
    </Title>
    <IconButton icon="moreOption" color="grey" shade="50" noBackground />
  </Header>
);
