import React from 'react';
import { Paper } from '@/core/presenters/components/atoms';
import { useStyles } from './styles';
import { CardMetrics } from '@/transaction/presenters/components/molecules';

export const Metrics: React.FC = () => {
  const classes = useStyles();
  return (
    <Paper density="highShadow" className={classes.container}>
      <CardMetrics percentage="+35%" title="Entrada" type="ENTRANCE" value={23451} withBorder={false} />
      <CardMetrics percentage="+38%" title="Saída" type="ENTRANCE" value={3566} />
      <CardMetrics percentage="+40%" title="Média do mês" type="ENTRANCE" value={1000} />
      <CardMetrics percentage="-40%" title="Fecham. do mês anterior" type="SPENT" value={1000} lastChild />
      <div />
    </Paper>
  );
};
