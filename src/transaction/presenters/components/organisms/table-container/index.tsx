import React, { useState } from 'react';
import { useStyles } from './styles';
import { FilterAddTable } from '@/transaction/presenters/components/atoms';

export const TableContainer: React.FC = () => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <div className={classes.container}>
      <FilterAddTable setOpenModal={() => setOpenModal(true)} buttonText="adicionar" />
      <div>Table</div>
    </div>
  );
};
