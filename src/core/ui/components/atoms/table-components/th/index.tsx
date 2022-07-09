import React from 'react';
import { StyledTh } from './styles';

interface ITh {
  onClick: () => void;
}

export const Th: React.FC<ITh> = ({ children, onClick }) => <StyledTh onClick={onClick}>{children}</StyledTh>;
