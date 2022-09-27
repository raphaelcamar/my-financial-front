import React from 'react';
import { AvailableIcons, Icon } from '@/core/ui/components/atoms';
import { Container } from './styles';

export type Density = 0 | 1 | 2;

export interface ICardFlag {
  icon?: AvailableIcons;
  density?: Density;
}

export const CardFlag: React.FC<ICardFlag> = ({ icon, density = 1 }) => (
  <Container density={density}>
    <Icon icon={icon} color="grey" shade="50" />
  </Container>
);
