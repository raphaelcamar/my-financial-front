import React from 'react';
import clsx from 'clsx';
import { Typography } from '@/core/presenters/components/atoms';
import { useStyles } from './styles';
import { PercentageIndicator } from '@/transaction/presenters/components/atoms';

interface ICardMetrics {
  title: string;
  value: string;
  type: string; // TODO when create, switch for typeTransaction
  withBorder?: boolean;
  lastChild?: boolean;
}

export const CardMetrics: React.FC<ICardMetrics> = ({ title, type, value, withBorder = true, lastChild }) => {
  const classes = useStyles();
  return (
    <>
      <div className={clsx(classes.container, !withBorder && classes.withoutBorder, lastChild && classes.lastChild)}>
        {withBorder && <div className={classes.line} />}
        <Typography variant="body1">{title}</Typography>
        <Typography variant="h4">{value}</Typography>
        <div className={classes.indicatorTexts}>
          <PercentageIndicator icon="lineArrowUp" text="teste" type="ENTRANCE" />
          <Typography variant="body1">vs mês anterior</Typography>
        </div>
      </div>
    </>
  );
};
