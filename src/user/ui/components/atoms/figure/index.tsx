import React from 'react';
import { AvailableIcons, Icon } from '@/core/ui/components/atoms';
import { Root, Format, Blur } from './styles';

interface IFigure {
  type: 'square' | 'circle';
}

export const Figure: React.FC<IFigure> = ({ type }) => (
  <Root>
    <Format>
      <Icon icon={type as AvailableIcons} color="primary" shade="main" size={442} />
    </Format>
    <Blur />
  </Root>
);
