import React from 'react';
import { Typography } from '@/core/presenters/components/atoms';
import { useStyles } from './styles';

export type ColorProps = 'primary' | 'error' | 'warning' | 'info' | 'success';

interface IChip {
  color: ColorProps;
  width?: number;
}

export const Chip: React.FC<IChip> = ({ children, color, width }) => {
  const classes = useStyles(color, width);
  return (
    <div data-testid="chip" className={classes.container}>
      <Typography variant="body1">{children}</Typography>
    </div>
  );
};
