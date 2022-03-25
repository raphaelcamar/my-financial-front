import React from 'react';
import { Paper } from '@/core/presenters/components/atoms';
import { useStyles } from './styles';
import { CardMetrics } from '@/transaction/presenters/components/molecules';

export const Metrics: React.FC = () => {
  const classes = useStyles();
  return (
    <Paper density="highShadow" className={classes.container}>
      <CardMetrics title="teste" type="ENTRANCE" value="456" withBorder={false} />
      <CardMetrics title="teste" type="ENTRANCE" value="456" />
      <CardMetrics title="teste" type="ENTRANCE" value="456" />
      <CardMetrics title="teste" type="ENTRANCE" value="456" lastChild />
      <div />
    </Paper>
  );
};
