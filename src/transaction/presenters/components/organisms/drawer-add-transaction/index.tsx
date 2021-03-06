import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
import { formatDate } from '@/core/presenters/utils';
import { Drawer } from '@/core/presenters/components/organisms';
import { Input, Button, Select, IconButton } from '@/core/presenters/components/molecules';
import { BodyContent, Buttons, Progress, SubmitButton, DrawerHeader } from './styles';
import { Transaction, TypeTopic, TypeTransaction } from '@/transaction/domain';
import { CreateTransactionSchema } from '@/transaction/data/use-cases';
import { InputMask } from '@/core/presenters/components/molecules/input-mask';
import { entranceItems, spentItems, typeItems } from '@/transaction/presenters/utils/data/';
import { useTransactionContext } from '@/transaction/presenters/contexts';
import { SelectType } from '@/core/domain';
import { Checkbox, Typography } from '@/core/presenters/components/atoms';

interface IDrawerAddTransaction {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IFormType extends Omit<Transaction.Data, 'topic' | 'type'> {
  topic: SelectType<TypeTopic>;
  type: SelectType<TypeTransaction>;
}

export const DrawerAddTransaction: React.FC<IDrawerAddTransaction> = ({ openModal, setOpenModal }) => {
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

  const handleChangeActualDay = value => {
    if (value) {
      setValue('billedAt', formatDate(new Date(), 'dd/MM/yyyy'));
    } else {
      setValue('billedAt', '');
    }
  };

  const onSubmit = async (data: IFormType) => {
    const transaction: Transaction.Data = { ...data, topic: data?.topic.value, type: data?.type.value };
    try {
      setLoading(true);
      await createTransaction(transaction);
      enqueueSnackbar('Transa????o criada com sucesso!', {
        variant: 'success',
      });
      // reset();
    } catch (err) {
      enqueueSnackbar(err?.message || 'N??o foi poss??vel criar a transa????o. Tente novamente mais tarde', {
        variant: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Drawer
      actionTop={
        <DrawerHeader>
          <Typography weight={500} size="large">
            Cadastre uma transa????o preenchendo os dados abaixo
          </Typography>
          <IconButton
            icon="close"
            color="primary"
            shade="500"
            iconProps={{ color: 'grey', shade: '50' }}
            onClick={() => setOpenModal(false)}
          />
        </DrawerHeader>
      }
      open={openModal}
    >
      <BodyContent onSubmit={handleSubmit(onSubmit)}>
        <Select
          placeholder="Selecione o tipo"
          name="type"
          helperText={errors?.type?.value?.message}
          error={!!errors?.type?.value?.message}
          setValue={setValue}
          value={watch('type')}
          label="Tipo da transa????o"
          items={typeItems}
        />

        <Select
          placeholder="Selecione o t??pico"
          name="topic"
          setValue={setValue}
          label="T??pico"
          helperText={errors?.topic?.value?.message}
          error={!!errors?.topic?.value?.message}
          value={watch('topic')}
          items={watch('type')?.value === 'SPENT' ? spentItems : entranceItems}
        />

        <Controller
          control={control}
          name="billedAt"
          render={({ field: { value, onChange } }) => (
            <InputMask
              validator={!!errors?.billedAt}
              messageValidator={errors?.billedAt?.message}
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
              validator={!!errors?.cost}
              messageValidator={errors?.cost?.message}
              label="Valor"
              mask="currency"
              onChange={e => onChange(e)}
            />
          )}
        />

        <Input
          label="Anota????o"
          {...register('anotation')}
          error={!!errors?.anotation}
          helperText={errors?.anotation?.message}
        />

        <Buttons>
          <Button variant="primary" styleType="outlined" type="button" onClick={() => setOpenModal(false)}>
            Cancelar
          </Button>
          <SubmitButton type="submit" variant="primary" onClick={() => handleSubmit(onSubmit)}>
            {loading && <Progress size={20} color="inherit" />}Adicionar
          </SubmitButton>
        </Buttons>
      </BodyContent>
    </Drawer>
  );
};
