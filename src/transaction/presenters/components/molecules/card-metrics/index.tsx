import React from 'react';
import clsx from 'clsx';
import { Typography } from '@/core/presenters/components/atoms';
import { useStyles } from './styles';
import { PercentageIndicator } from '@/transaction/presenters/components/atoms';
import { TypeTransaction } from '@/transaction/domain';
import { formatCurrency } from '@/core/presenters/utils';

interface ICardMetrics {
  lastChild?: boolean;
  percentage: string;
  title: string;
  type: TypeTransaction;
  value: number;
  withBorder?: boolean;
}

export const CardMetrics: React.FC<ICardMetrics> = ({
  lastChild,
  percentage,
  title,
  type,
  value,
  withBorder = true,
}) => {
  const classes = useStyles();
  return (
    <>
      <div className={clsx(classes.container, !withBorder && classes.withoutBorder, lastChild && classes.lastChild)}>
        {withBorder && <div className={classes.line} />}
        <Typography variant="body1">{title}</Typography>
        <Typography variant="h4">{formatCurrency(value)}</Typography>
        <div className={classes.indicatorTexts}>
          <PercentageIndicator text={percentage} type={type} />
          <Typography variant="body1">vs mês anterior</Typography>
        </div>
      </div>
    </>
  );
};
