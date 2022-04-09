import React from 'react';
import { useTheme } from '@mui/material';
import clsx from 'clsx';
import { useStyles } from './styles';
import { Icon, Typography } from '@/core/presenters/components/atoms';
import { TypeTransaction } from '@/transaction/domain';

interface IPercentageIndicator {
  type: TypeTransaction;
  text: string;
  iconWithText?: boolean;
}

export const PercentageIndicator: React.FC<IPercentageIndicator> = ({ text, type, iconWithText }) => {
  const theme = useTheme();

  const color = type === 'ENTRANCE' ? theme.palette.success[500] : theme.palette.error[500];

  const classes = useStyles(type);

  return (
    <div className={classes.container}>
      <div className={clsx(classes.button, iconWithText && classes.iconWithText)}>
        {iconWithText && <Typography variant="body1">{text}</Typography>}
        <Icon icon={type === 'SPENT' ? 'lineArrowDown' : 'lineArrowUp'} color={color} />
      </div>
      {!iconWithText && <Typography variant="body1">{text}</Typography>}
    </div>
  );
};
