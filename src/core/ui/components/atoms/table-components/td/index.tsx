import React from 'react';
import { StyledTd } from './styles';

export interface ITd {
  width?: number;
  onClick?: () => void;
  withoutLine?: boolean;
}

export const Td: React.FC<ITd> = ({ children, width, onClick, withoutLine }) => (
  <StyledTd onClick={onClick} width={width} withoutLine={withoutLine}>
    {children}
  </StyledTd>
);
