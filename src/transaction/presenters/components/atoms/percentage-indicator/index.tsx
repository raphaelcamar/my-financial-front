import React from 'react';
import { useTheme } from '@mui/material';
import clsx from 'clsx';
import { AvailableIcons } from '@/core/domain';
import { useStyles } from './styles';
import { Icon, Typography } from '@/core/presenters/components/atoms';

interface IPercentageIndicator {
  type: string; // TODO when create, switch for typeTransaction
  icon: AvailableIcons;
  text: string;
  iconWithText?: boolean;
}

export const PercentageIndicator: React.FC<IPercentageIndicator> = ({ icon, text, type, iconWithText }) => {
  const classes = useStyles(type);
  const theme = useTheme();

  const color = type === 'ENTRANCE' ? theme.palette.success[500] : theme.palette.error[500];

  return (
    <div className={classes.container}>
      <button type="button" className={clsx(classes.button, iconWithText && classes.iconWithText)}>
        {iconWithText && <Typography variant="body1">{text}</Typography>}
        <Icon icon="lineArrowUp" color={color} />
      </button>
      {!iconWithText && <Typography variant="body1">{text}</Typography>}
    </div>
  );
};
