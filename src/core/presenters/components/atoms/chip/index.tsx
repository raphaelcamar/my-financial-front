import React from 'react';
import { useStyles } from './styles';

export type ColorProps = 'primary' | 'error' | 'warning' | 'info' | 'success';

interface IChip {
  color: ColorProps;
  width?: number;
}

export const Chip: React.FC<IChip> = ({ children, color, width }) => {
  const classes = useStyles(color, width);
  return <div className={classes.container}>{children}</div>;
};
