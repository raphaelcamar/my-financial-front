import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Drawer } from '@/core/presenters/components/organisms';
import { Button, Input } from '@/core/presenters/components/molecules';
import { useStyles } from './styles';
import { Transaction } from '@/transaction/domain/entities';
import { CreateTransactionSchema } from '@/transaction/data/use-cases';
import { Select } from '@/core/presenters/components/atoms';

interface IDrawerAddTransaction {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const items = [
  {
    text: 'teste1',
    value: 'teste1',
  },
  {
    text: 'teste2',
    value: 'teste2',
  },
  {
    text: 'teste3',
    value: 'teste3',
  },
  {
    text: 'teste4',
    value: 'teste4',
  },
];

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
        <Select label="Tópico" items={items} />
        {/* TODO select */}
        <Input label="Tipo da transação" />
        {/* TODO input mask install */}
        <Input label="Data" />
        {/* TODO input mask value, with helper */}
        <Input label="Valor" />
        <Input label="Anotação" />
        <div className={classes.buttons}>
          <Button variant="outlined" size="large" onClick={() => setOpenModal(false)}>
            Cancelar
          </Button>
          <Button
            type="submit"
            icon="add"
            variant="fullfiled"
            size="large"
            onClick={() => handleSubmit(handleSubmitForm)}
          >
            Adicionar
          </Button>
        </div>
      </form>
    </Drawer>
  );
};
