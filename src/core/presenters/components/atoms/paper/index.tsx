import clsx from 'clsx';
import React from 'react';
import { useStyles } from './styles';

interface IPaper extends React.HTMLAttributes<HTMLDivElement> {
  density: 'lowShadow' | 'highShadow';
}

export type Density = 0 | 1 | 2;

export interface IPpaperNew extends React.HTMLAttributes<HTMLDivElement> {
  density: Density;
}

export const Paper: React.FC<IPaper> = ({ density, children, className, ...props }) => {
  const classes = useStyles();
  return (
    <div data-testid="paper" {...props} className={clsx(classes.container, classes[density], className)}>
      {children}
    </div>
  );
};
