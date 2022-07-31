import React from 'react';
import { PaperContainer } from './styles';

export type Density = 0 | 1 | 2;

export type NoRadius = 'right' | 'left' | 'top' | 'bottom';

export interface IPaper extends React.HTMLAttributes<HTMLDivElement> {
  density: Density;
  noRadiusIn?: NoRadius;
  fullWidth?: boolean;
}

export const Paper: React.FC<IPaper> = ({ density, children, noRadiusIn, fullWidth, ...props }) => (
  <PaperContainer data-testid="paper" density={density} noRadiusIn={noRadiusIn} fullWidth={fullWidth} {...props}>
    {children}
  </PaperContainer>
);
