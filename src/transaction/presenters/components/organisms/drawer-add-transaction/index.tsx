import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
import { Drawer } from '@/core/presenters/components/organisms';
import { Input, Button, Select } from '@/core/presenters/components/molecules';
import { useStyles } from './styles';
import { Transaction, TypeTopic, TypeTransaction } from '@/transaction/domain';
import { CreateTransactionSchema } from '@/transaction/data/use-cases';
import { InputMask } from '@/core/presenters/components/molecules/input-mask';
import { entranceItems, spentItems, typeItems } from '@/transaction/presenters/utils/data/';
import { CircularProgress } from '@/core/presenters/components/atoms';
import { useTransactionContext } from '@/transaction/presenters/contexts';
import { SelectType } from '@/core/domain';

interface IDrawerAddTransaction {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IFormType extends Omit<Transaction, 'topic' | 'type'> {
  topic: SelectType<TypeTopic>;
  type: SelectType<TypeTransaction>;
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
    watch,
    control,
    formState: { errors },
  } = useForm<Partial<IFormType>>({ resolver: yupResolver(CreateTransactionSchema) });

  const onSubmit = async (data: IFormType) => {
    const transaction: Transaction = { ...data, topic: data?.topic.value, type: data?.type.value };
    try {
      setLoading(true);
      await createTransaction(transaction);
      enqueueSnackbar('Transação criada com sucesso!', {
        variant: 'success',
      });
      // reset();
    } catch (err) {
      enqueueSnackbar(err?.message || 'Não foi possível criar a transação. Tente novamente mais tarde', {
        variant: 'error',
      });
    } finally {
      setLoading(false);
    }
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
          placeholder="Selecione o tipo"
          name="type"
          setValue={setValue}
          value={watch('type')}
          label="Tipo da transação"
          items={typeItems}
        />

        <Select
          placeholder="Selecione o tópico"
          name="topic"
          setValue={setValue}
          label="Tópico"
          value={watch('topic')}
          items={watch('type')?.value === 'SPENT' ? spentItems : entranceItems}
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
          {...register('anotation')}
          error={!!errors?.anotation}
          helperText={errors?.anotation?.message}
        />

        <div className={classes.buttons}>
          <Button variant="primary" styleType="outlined" type="button" onClick={() => setOpenModal(false)}>
            Cancelar
          </Button>
          <Button
            type="submit"
            variant="primary"
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
