import React, { ReactElement, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DatePicker, InputSelectHorizontal, ItemSelectHorizontalProps, Typography } from '@/core/ui/components/atoms';
import * as S from './styles';
import { IconButton, Input, InputMask, Select } from '@/core/ui/components/molecules';
import { Drawer } from '@/core/ui/components/organisms';
import { MonthlyRecurrence } from '@/monthly-recurrence/domain';
import { CreateMonthlyRecurrence } from './validation';
import { Autocomplete } from '@/core/ui/components/organisms/autocomplete';
import { useMonthlyRecurrenceContext } from '@/monthly-recurrence/presenters/contexts/monthly-recurrence-context';

type IAddMonthlyRecurrenceModal = {
  closeModal: () => void;
  open: boolean;
};

export const AddMonthlyRecurrenceModal = ({ closeModal, open }: IAddMonthlyRecurrenceModal): ReactElement => {
  const [loading, setLoading] = useState(false);
  const { tags } = useMonthlyRecurrenceContext();

  const memoizedSelectValues: any = useMemo(
    () => Array.from({ length: 31 }, (_, ind) => ({ text: ind + 1, value: ind + 1 })),
    []
  );
  const memoizedTagsList = tags?.map(tag => ({ label: `${tag?.title} - ${tag?.description}`, value: tag?.id }));

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm<MonthlyRecurrence.Data>({ resolver: yupResolver(CreateMonthlyRecurrence) });

  const paymentTypeOptions: ItemSelectHorizontalProps[] = [
    { label: 'Cartão de crédito', value: 'CREDIT' },
    { label: 'Cartão de débito', value: 'DEBIT' },
    { label: 'Dinheiro', value: 'MONEY' },
    { label: 'PIX', value: 'PIX' },
    { label: 'Transferência bancária', value: 'TRANSFER' },
    { label: 'Criptomoedas', value: 'CRYPTO' },
    { label: 'Boleto bancário', value: 'BANK_SLIP' },
    { label: 'Outro', value: 'OTHER' },
  ];

  const handleSubmitForm = async (data: MonthlyRecurrence.Data) => {
    try {
      setLoading(true);
      // await getTransactions(data);
    } catch (err) {
      // enqueueSnackbar(err?.message || 'Aconteceu alguma coisa. Tente novamente depois', { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Drawer
      open={open}
      actionTop={
        <S.DrawerHeader>
          <Typography type="h2" size="xlarge">
            Adicionar transação
          </Typography>
          <IconButton icon="close" onClick={() => closeModal()} iconProps={{ color: 'background', shade: 'paper' }} />
        </S.DrawerHeader>
      }
    >
      <S.Container style={{ height: '100%' }} onSubmit={handleSubmit(handleSubmitForm)}>
        <S.BodyFields>
          <Input
            label="Nome"
            {...register('title')}
            error={!!errors.title?.message}
            helperText={errors.title?.message}
          />

          {memoizedTagsList && (
            <Autocomplete
              items={memoizedTagsList}
              label="Tags"
              placeholder={watch('tags')?.length > 0 && `${watch('tags').length} selecionado(s)`}
              onSelect={e => setValue('tags', e)}
              error={!!errors.tags?.message}
              helperText={errors.tags?.message}
            />
          )}

          <Input
            label="Descrição"
            {...register('description')}
            error={!!errors.description?.message}
            helperText={errors.description?.message}
          />

          <InputSelectHorizontal
            name="paymentType"
            setValue={setValue}
            value={watch('paymentType')}
            label="Tipo de pagamento"
            helperText={errors?.paymentType?.message}
            error={!!errors?.paymentType?.message}
            items={paymentTypeOptions}
          />
          <S.WrapperTwoFields>
            <Controller
              control={control}
              name="value"
              render={({ field: { onChange } }) => (
                <InputMask
                  error={!!errors.value?.message}
                  helperText={errors?.value?.message}
                  label="Valor"
                  mask="currency"
                  onChange={onChange}
                  actionEnd={
                    <Typography color="grey" shade={300}>
                      BRL
                    </Typography>
                  }
                />
              )}
            />
            <Select
              name="type"
              items={[
                { text: 'Despesa', value: 'SPENT' },
                { text: 'Receita', value: 'ENTRANCE' },
              ]}
              label="Tipo de recorrência"
              setValue={setValue}
              value={watch('type')}
              error={!!errors.type?.message}
              helperText={errors.type?.message}
            />
          </S.WrapperTwoFields>

          <S.WrapperTwoFields>
            <Controller
              control={control}
              name="expirationDate"
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  customInput={
                    <Input
                      placeholder="Sem expiração"
                      label="Data de expiração"
                      helperText={errors?.expirationDate?.message}
                      error={!!errors?.expirationDate?.message}
                    />
                  }
                  selected={value as Date}
                  onChange={date => onChange(date)}
                />
              )}
            />

            <Select
              name="dueDate"
              items={memoizedSelectValues}
              setValue={setValue}
              value={watch('dueDate')?.toString()}
              label="Dia de cobrança"
              limitHeightIn={2}
              error={!!errors.dueDate?.message}
              helperText={errors.dueDate?.message}
            />
          </S.WrapperTwoFields>
        </S.BodyFields>

        <S.WrapperButtons>
          <S.StyledButton
            type="button"
            styleType="glass"
            variant="error"
            onClick={() => closeModal()}
            disabled={loading}
          >
            Cancelar
          </S.StyledButton>
          <S.StyledButton type="submit" loading={loading} disabled={loading}>
            Confirmar
          </S.StyledButton>
        </S.WrapperButtons>
      </S.Container>
    </Drawer>
  );
};
