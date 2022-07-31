import React from 'react';
import { Typography } from '@/core/ui/components/atoms';
import { ContainerChip } from './styles';
import { FontColorProps } from '@/main/styled';

// TODO
export interface IChip {
  color: keyof FontColorProps;
  width?: number;
}

export const Chip: React.FC<IChip> = ({ children, color, width }) => (
  <ContainerChip data-testid="chip" color={color} width={width}>
    <Typography color={color} size="small">
      {children}
    </Typography>
  </ContainerChip>
);
