import React from 'react';
import { useStyles } from './styles';
import { Metrics, TableContainer } from '@/transaction/presenters/components/organisms';
import { Grid } from '@/core/presenters/components/atoms';

export const TransactionsPage: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item md={9}>
        <Grid container spacing={3}>
          <Grid item md={12}>
            <Metrics />
          </Grid>
          <Grid item md={12}>
            <TableContainer />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={3}>
        <div style={{ minHeight: '100vh', background: 'blue' }}>Another sidebar</div>
      </Grid>
    </Grid>
  );
};
