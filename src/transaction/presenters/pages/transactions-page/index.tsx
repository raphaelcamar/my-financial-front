import React, { useState } from 'react';
import { useStyles } from './styles';
import { Metrics, TableContainer, DrawerAddTransaction } from '@/transaction/presenters/components/organisms';
import { Grid } from '@/core/presenters/components/atoms';

import { FilterAddTable } from '@/transaction/presenters/components/atoms';

export const TransactionsPage: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <Grid container spacing={3}>
      <Grid item md={9} sm={12} xs={12}>
        <Grid container spacing={3}>
          <Grid item md={12}>
            <Metrics />
          </Grid>
          <Grid item md={12}>
            <FilterAddTable setOpenModal={() => setOpenModal(true)} buttonText="adicionar" />
            <DrawerAddTransaction openModal={openModal} setOpenModal={setOpenModal} />
          </Grid>
          <Grid item md={12}>
            <TableContainer />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={3}>
        <div style={{ minHeight: '100vh' }}>Fechamento dos últimos meses</div>
      </Grid>
    </Grid>
  );
};
