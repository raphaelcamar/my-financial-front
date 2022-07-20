/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
import { formatDate, formatDateBR } from '@/core/utils';
import { Drawer } from '@/core/ui/components/organisms';
import { Input, Button, Select, IconButton } from '@/core/ui/components/molecules';
import { BodyContent, Buttons, Progress, SubmitButton, DrawerHeader } from './styles';
import { Transaction } from '@/transaction/domain';
import { CreateTransactionSchema } from '@/transaction/data/use-cases';
import { InputMask } from '@/core/ui/components/molecules/input-mask';
import { entranceItems, spentItems, typeItems } from '@/transaction/utils/data';
import { useTransactionContext } from '@/transaction/presenters/contexts';
import { Checkbox, Typography } from '@/core/ui/components/atoms';

interface IDrawerTransaction {
  openModal: boolean;
  setOpenModal: () => void;
  type?: 'create' | 'update';
  defaultValues?: Transaction;
}

export const DrawerTransaction: React.FC<IDrawerTransaction> = ({ openModal, setOpenModal, type, defaultValues }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { createTransaction, updateTransaction } = useTransactionContext();
  const { enqueueSnackbar } = useSnackbar();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm<Transaction.Data>({ resolver: yupResolver(CreateTransactionSchema) });

  const handleChangeActualDay = value => {
    if (value) {
      setValue('billedAt', formatDate(new Date(), 'dd/MM/yyyy'));
    } else {
      setValue('billedAt', '');
    }
  };

  useEffect(() => {
    reset({ ...defaultValues, billedAt: formatDateBR(defaultValues?.billedAt.toString()) });
  }, [defaultValues]);

  const onSubmit = async (data: Transaction.Data) => {
    try {
      setLoading(true);
      const execute = type === 'create' ? createTransaction : updateTransaction;

      await execute(data);

      enqueueSnackbar('Transação criada com sucesso!', {
        variant: 'success',
      });

      // reset();
    } catch (err) {
      enqueueSnackbar(
        err?.message ||
          `Não foi possível ${type === 'create' ? 'criar' : 'alterar'} a transação. Tente novamente mais tarde`,
        {
          variant: 'error',
        }
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setOpenModal();
    reset();
  };

  return (
    <Drawer
      actionTop={
        <DrawerHeader>
          <Typography weight={500} size="large">
            Cadastre uma transação preenchendo os dados abaixo
          </Typography>
          <IconButton
            icon="close"
            color="primary"
            shade="500"
            iconProps={{ color: 'grey', shade: '50' }}
            onClick={() => handleCloseModal()}
          />
        </DrawerHeader>
      }
      open={openModal}
    >
      <BodyContent onSubmit={handleSubmit(onSubmit)}>
        <Select
          placeholder="Selecione o tipo"
          name="type"
          helperText={errors?.type?.message}
          error={!!errors?.type?.message}
          setValue={setValue}
          value={watch('type')}
          label="Tipo da transação"
          items={typeItems}
          defaultValue={defaultValues?.type}
        />

        <Select
          placeholder="Selecione o tópico"
          name="topic"
          setValue={setValue}
          label="Tópico"
          helperText={errors?.topic?.message}
          error={!!errors?.topic?.message}
          value={watch('topic')}
          items={watch('type') === 'SPENT' ? spentItems : entranceItems}
          defaultValue={defaultValues?.topic}
        />

        <Controller
          control={control}
          name="billedAt"
          render={({ field: { value, onChange } }) => (
            <InputMask
              defaultValue={formatDateBR(defaultValues?.billedAt.toString())}
              error={!!errors?.billedAt}
              helperText={errors?.billedAt?.message}
              label="Data"
              mask="date"
              value={value as string}
              onChange={e => onChange(e)}
            />
          )}
        />
        <Checkbox label="Dia de hoje" onChange={e => handleChangeActualDay(e.target.checked)} />

        <Controller
          control={control}
          name="cost"
          render={({ field: { onChange } }) => (
            <InputMask
              defaultValue={String(defaultValues?.cost)}
              error={!!errors?.cost}
              helperText={errors?.cost?.message}
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
          defaultValue={defaultValues?.anotation}
          helperText={errors?.anotation?.message}
        />

        <Buttons>
          <Button variant="primary" styleType="outlined" type="button" onClick={() => handleCloseModal()}>
            Cancelar
          </Button>
          <SubmitButton type="submit" variant="primary" onClick={() => handleSubmit(onSubmit)}>
            {loading ? <Progress /> : type === 'create' ? 'Adicionar' : 'Atualizar'}
          </SubmitButton>
        </Buttons>
      </BodyContent>
    </Drawer>
  );
};
