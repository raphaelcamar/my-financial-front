import React from 'react';
import { useTheme } from '@mui/material';
import { Icon } from '@/core/presenters/components/atoms';
import { useStyles } from './styles';
import { AvailableIcons } from '@/core/domain';

interface IFigure {
  type: 'square' | 'circle';
}

export const Figure: React.FC<IFigure> = ({ type }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.container}>
      <div className={classes.format}>
        <Icon icon={type as AvailableIcons} color={theme.palette.primary.main} />
      </div>
      <div className={classes.blurred} />
    </div>
  );
};
