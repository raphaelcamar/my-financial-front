import React from 'react';
import { StyledPaper } from './styles';

export const CardProfile: React.FC = ({ children }) => (
  <StyledPaper density={1} noRadiusIn="top">
    {children}
  </StyledPaper>
);
