import React from 'react';
import { Icon } from '@/core/ui/components/atoms';
import { Root, Format, Blur } from './styles';
import { AvailableIcons } from '@/core/domain';

interface IFigure {
  type: 'square' | 'circle';
}

export const Figure: React.FC<IFigure> = ({ type }) => (
  <Root>
    <Format>
      <Icon icon={type as AvailableIcons} color="primary" shade="main" />
    </Format>
    <Blur />
  </Root>
);
