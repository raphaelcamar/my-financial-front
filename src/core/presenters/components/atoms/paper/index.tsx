import clsx from 'clsx';
import React from 'react';
import { useStyles } from './styles';

interface IPaper extends React.HTMLAttributes<HTMLDivElement> {
  density: 'lowShadow' | 'highShadow';
}

export const Paper: React.FC<IPaper> = ({ density, children, className, ...props }) => {
  const classes = useStyles();
  return (
    <div {...props} className={clsx(classes.container, classes[density], className)}>
      {children}
    </div>
  );
};
