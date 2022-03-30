import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Drawer } from '@/core/presenters/components/organisms';
import { Button, Input, ISelectOption, Select } from '@/core/presenters/components/molecules';
import { useStyles } from './styles';
import { Transaction, TypeTopic, TypeTransaction } from '@/transaction/domain/entities';
import { CreateTransactionSchema } from '@/transaction/data/use-cases';

interface IDrawerAddTransaction {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const items = [
  {
    text: 'Alimentação',
    value: 'FOOD' as TypeTopic,
  },
  {
    text: 'Transporte',
    value: 'TRANSPORT' as TypeTopic,
  },
  {
    text: 'Saúde',
    value: 'HEALTH' as TypeTopic,
  },
  {
    text: 'Outro',
    value: 'OTHER' as TypeTopic,
  },
];

const typeItems = [
  {
    text: 'Entrada',
    value: 'ENTRANCE' as TypeTransaction,
  },

  {
    text: 'Saída',
    value: 'SPENT' as TypeTransaction,
  },
];

export const DrawerAddTransaction: React.FC<IDrawerAddTransaction> = ({ openModal, setOpenModal }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Partial<Transaction>>({ resolver: yupResolver(CreateTransactionSchema) });

  const onSubmit = data => console.log(data);

  const handleChangeSelect = (type: any, item: ISelectOption) => {
    setValue(type, item.value as TypeTopic, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  return (
    <Drawer
      text="teste de título para o drawer"
      onSubmit={() => handleSubmit(onSubmit)}
      anchor="right"
      open={openModal}
      onClose={() => setOpenModal(false)}
    >
      <form className={classes.bodyContent} onSubmit={handleSubmit(onSubmit)}>
        <Select
          label="Tópico"
          items={items}
          onChange={item => handleChangeSelect('topic', item)}
          validator={!!errors?.topic}
          messageValidator={errors?.topic?.message}
        />

        <Select
          label="Tipo da transação"
          items={typeItems}
          onChange={item => handleChangeSelect('type', item)}
          validator={!!errors?.type}
          messageValidator={errors?.type?.message}
        />

        <Input
          label="Data"
          {...register('billedAt')}
          validator={!!errors?.billedAt}
          messageValidator={errors?.billedAt?.message}
        />
        <Input
          label="Valor"
          {...register('value')}
          validator={!!errors?.value}
          messageValidator={errors?.value?.message}
        />
        <Input
          label="Anotação"
          {...register('anotation')}
          validator={!!errors?.anotation}
          messageValidator={errors?.anotation?.message}
        />
        <div className={classes.buttons}>
          <Button variant="outlined" size="large" onClick={() => setOpenModal(false)}>
            Cancelar
          </Button>
          <Button type="submit" icon="add" variant="fullfiled" size="large" onClick={() => handleSubmit(onSubmit)}>
            Adicionar
          </Button>
        </div>
      </form>
    </Drawer>
  );
};
