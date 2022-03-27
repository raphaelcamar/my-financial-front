import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Drawer } from '@/core/presenters/components/organisms';
import { Input } from '@/core/presenters/components/molecules';
import { useStyles } from './styles';
import { Transaction } from '@/transaction/domain/entities';
import { CreateTransactionSchema } from '@/transaction/data/use-cases';

interface IDrawerAddTransaction {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const DrawerAddTransaction: React.FC<IDrawerAddTransaction> = ({ openModal, setOpenModal }) => {
  // TODO: context for creating transaction, react hook form for him as well
  const classes = useStyles();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Partial<Transaction>>({ resolver: yupResolver(CreateTransactionSchema) });

  const handleSubmitForm = async (data: Partial<Transaction>): Promise<void> => {
    setLoading(true);
    try {
      // TODO
    } catch (e) {
      // TODO
    } finally {
      setLoading(false);
    }
  };

  return (
    <Drawer
      text="teste de título para o drawer"
      onSubmit={() => handleSubmit(handleSubmitForm)}
      anchor="right"
      open={openModal}
      onClose={() => setOpenModal(false)}
    >
      <form className={classes.bodyContent} onSubmit={() => handleSubmit(handleSubmitForm)}>
        {/* TODO select */}
        <Input label="Tópico" />
        {/* TODO select */}
        <Input label="Tipo da transação" />
        {/* TODO input mask install */}
        <Input label="Data" />
        {/* TODO input mask value, with helper */}
        <Input label="Valor" />
        <Input label="Anotação" />
        <button type="submit">teste</button>
      </form>
    </Drawer>
  );
};
