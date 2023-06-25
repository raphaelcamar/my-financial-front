import React from 'react';
import { Icon, Typography } from '@/core/ui/components/atoms';
import { Container } from './styles';

interface IEmptyState {
  message: string;
}

export const EmptyState: React.FC<IEmptyState> = ({ message }) => (
  <Container>
    <Icon icon="emptyState" size={448} />
    <Typography weight={600}>{message}</Typography>
  </Container>
);
