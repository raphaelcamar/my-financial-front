import React, { useState } from 'react';
import { useStyles } from './styles';
import { FilterAddTable } from '@/transaction/presenters/components/atoms';
import { DrawerAddTransaction } from '@/transaction/presenters/components/organisms';

export const TableContainer: React.FC = () => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <div className={classes.container}>
      <FilterAddTable setOpenModal={() => setOpenModal(true)} buttonText="adicionar" />
      <div>Table</div>

      <DrawerAddTransaction openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};
