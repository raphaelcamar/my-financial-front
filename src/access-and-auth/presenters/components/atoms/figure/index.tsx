import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Icon } from '@/core/presenters/components/atoms';
import { Root, Format, Blur } from './styles';
import { AvailableIcons } from '@/core/domain';

interface IFigure {
  type: 'square' | 'circle';
}

export const Figure: React.FC<IFigure> = ({ type }) => {
  const theme = useContext(ThemeContext);
  return (
    <Root>
      <Format>
        <Icon icon={type as AvailableIcons} color={theme.palette.primary.main} />
      </Format>
      <Blur />
    </Root>
  );
};
