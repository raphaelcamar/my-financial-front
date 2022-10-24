import React from 'react';
import { StyledTd } from './styles';

export interface ITd {
  width?: number;
  onClick?: () => void;
}

export const Td: React.FC<ITd> = ({ children, width, onClick }) => (
  <StyledTd onClick={onClick} width={width}>
    {children}
  </StyledTd>
);
