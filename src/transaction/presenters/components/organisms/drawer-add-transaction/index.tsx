import React from 'react';
import { Drawer } from '@/core/presenters/components/organisms';
import { Input } from '@/core/presenters/components/molecules';
import { useStyles } from './styles';

interface IDrawerAddTransaction {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const DrawerAddTransaction: React.FC<IDrawerAddTransaction> = ({ openModal, setOpenModal }) => {
  // TODO: context for creating transaction, react hook form for him as well
  const classes = useStyles();
  return (
    <Drawer text="teste de título para o drawer" anchor="right" open={openModal} onClose={() => setOpenModal(false)}>
      <div className={classes.bodyContent}>
        <Input label="Tópico" />
        <Input label="Tópico" />
        <Input label="Tópico" />
        <Input label="Tópico" />
        <Input label="Tópico" />
      </div>
    </Drawer>
  );
};
