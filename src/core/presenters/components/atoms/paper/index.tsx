import React from 'react';
import { PaperContainer } from './styles';

export type Density = 0 | 1 | 2;

export interface IPaper extends React.HTMLAttributes<HTMLDivElement> {
  density: Density;
}

export const Paper: React.FC<IPaper> = ({ density, children, ...props }) => (
  <PaperContainer data-testid="paper" density={density} {...props}>
    {children}
  </PaperContainer>
);
