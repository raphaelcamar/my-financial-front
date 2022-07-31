import React from 'react';
import { StyledTd } from './styles';

interface ITd {
  width?: number;
}

export const Td: React.FC<ITd> = ({ children, width }) => <StyledTd width={width}>{children}</StyledTd>;
