import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
import { Drawer } from '@/core/presenters/components/organisms';
import { Button, Input, ISelectOption, Select } from '@/core/presenters/components/molecules';
import { useStyles } from './styles';
import { Transaction, TypeTopic } from '@/transaction/domain';
import { CreateTransactionSchema } from '@/transaction/data/use-cases';
import { InputMask } from '@/core/presenters/components/molecules/input-mask';
import { items, typeItems } from '@/transaction/presenters/utils/data/';
import { CircularProgress } from '@/core/presenters/components/atoms';
import { useTransactionContext } from '@/transaction/presenters/contexts';

interface IDrawerAddTransaction {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DrawerAddTransaction: React.FC<IDrawerAddTransaction> = ({ openModal, setOpenModal }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState<boolean>(false);
  const { createTransaction } = useTransactionContext();
  const { enqueueSnackbar } = useSnackbar();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<Partial<Transaction>>({ resolver: yupResolver(CreateTransactionSchema) });

  const onSubmit = async (data: Transaction) => {
    try {
      setLoading(true);
      await createTransaction(data);
      enqueueSnackbar('Transação criada com sucesso!', {
        variant: 'success',
      });
    } catch (err) {
      enqueueSnackbar('Não foi possível criar a transação. Tente novamente mais tarde', { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleChangeSelect = (type, item: ISelectOption) => {
    setValue(type, item.value as TypeTopic, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  return (
    <Drawer
      text="Cadastre uma transação preenchendo os dados abaixo"
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

        <Controller
          control={control}
          name="billedAt"
          render={({ field: { onChange } }) => (
            <InputMask
              validator={!!errors?.billedAt}
              messageValidator={errors?.billedAt?.message}
              label="Data"
              mask="date"
              onChange={e => onChange(e)}
            />
          )}
        />

        <Controller
          control={control}
          name="cost"
          render={({ field: { onChange } }) => (
            <InputMask
              validator={!!errors?.cost}
              messageValidator={errors?.cost?.message}
              label="Valor"
              mask="currency"
              onChange={e => onChange(e)}
            />
          )}
        />

        <Input
          label="Anotação"
          inputProps={{ ...register('anotation') }}
          validator={!!errors?.anotation}
          messageValidator={errors?.anotation?.message}
        />

        <div className={classes.buttons}>
          <Button variant="outlined" size="large" type="button" onClick={() => setOpenModal(false)}>
            Cancelar
          </Button>
          <Button
            type="submit"
            variant="fullfiled"
            size="large"
            onClick={() => handleSubmit(onSubmit)}
            className={classes.submitButton}
          >
            {loading && <CircularProgress size={20} color="inherit" className={classes.progress} />}Adicionar
          </Button>
        </div>
      </form>
    </Drawer>
  );
};
