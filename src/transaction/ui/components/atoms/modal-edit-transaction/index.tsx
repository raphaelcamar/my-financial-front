import React, { ReactElement, useEffect, useMemo, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  DatePicker,
  InputSelectHorizontal,
  ItemSelectHorizontalProps,
  Modal,
  Typography,
} from '@/core/ui/components/atoms';
import { Transaction, TypeStatus } from '@/transaction/domain';
import { Button, Input, InputMask, Select } from '@/core/ui/components/molecules';
import { Form, Row, WrapperButtons } from './styles';
import { CreateEntranceTransactionSchema, CreateSpentTransactionSchema } from '@/transaction/data';
import { SelectType } from '@/core/domain';
import { useAccessContext } from '@/user/presenters';
import { formatCurrency } from '@/core/utils';

type ModalEditTransactionProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  transaction: Transaction;
  onSubmit: (transaction: Transaction.Data) => Promise<void>;
  loading: boolean;
};

export const ModalEditTransaction = ({
  open,
  setOpen,
  transaction,
  loading,
  onSubmit,
}: ModalEditTransactionProps): ReactElement => {
  const isSpent = transaction.type === 'SPENT';
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<Transaction.Data>({
    resolver: yupResolver(isSpent ? CreateSpentTransactionSchema : CreateEntranceTransactionSchema),
  });

  const { user } = useAccessContext();

  const statusOptions: SelectType<TypeStatus>[] = [
    {
      text: 'Pendente',
      value: 'PENDING',
    },
    {
      text: 'Concluído',
      value: 'FINISHED',
    },
  ];

  const topicOptionsSpent: ItemSelectHorizontalProps[] = [
    { label: 'Saúde', value: 'HEALTH' },
    { label: 'Transporte', value: 'TRANSPORT' },
    { label: 'Alimentação', value: 'FOOD' },
    { label: 'Lazer', value: 'LEISURE' },
    { label: 'Outro', value: 'OTHER' },
  ];

  const topicOptionsEntrance: ItemSelectHorizontalProps[] = [
    { label: 'Salário', value: 'SALARY' },
    { label: 'Outro', value: 'OTHER' },
  ];

  const paymentTypeOptionsSpent: ItemSelectHorizontalProps[] = [
    { label: 'Cartão de crédito', value: 'CREDIT' },
    { label: 'Cartão de débito', value: 'DEBIT' },
    { label: 'Dinheiro', value: 'MONEY' },
    { label: 'PIX', value: 'PIX' },
    { label: 'Transferência bancária', value: 'TRANSFER' },
    { label: 'Criptomoedas', value: 'CRYPTO' },
    { label: 'Boleto bancário', value: 'BANK_SLIP' },
    { label: 'Outro', value: 'OTHER' },
  ];

  const paymentTypeOptionsEntrance: ItemSelectHorizontalProps[] = [
    { label: 'Dinheiro', value: 'MONEY' },
    { label: 'PIX', value: 'PIX' },
    { label: 'Transferência bancária', value: 'TRANSFER' },
    { label: 'Outro', value: 'OTHER' },
  ];

  const walletOptions: SelectType<string>[] = useMemo(
    () => (user?.wallets ? user?.wallets?.map(wallet => ({ text: `${wallet.name}`, value: wallet.id })) : []),
    [user]
  );

  useEffect(() => {
    reset({
      ...transaction,
    });
  }, [transaction]);

  return (
    <Modal open={open} title="Alterar transação" closeModal={() => setOpen(false)} style={{ maxWidth: 850 }}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Input
            label="Observação"
            helperText={errors?.anotation?.message}
            error={!!errors?.anotation?.message}
            {...register('anotation')}
          />
          <Select
            placeholder="Selecione a carteira"
            name="walletId"
            helperText={errors?.walletId?.message}
            error={!!errors?.walletId?.message}
            setValue={setValue}
            value={watch('walletId')}
            label="Carteira"
            items={walletOptions}
            defaultValue={user?.wallets?.[0].id}
          />
        </Row>
        <Row>
          <InputSelectHorizontal
            name="topic"
            setValue={setValue}
            label="Tópico"
            helperText={errors?.topic?.message}
            error={!!errors?.topic?.message}
            items={isSpent ? topicOptionsSpent : topicOptionsEntrance}
            defaultValue={transaction.topic}
          />
        </Row>
        <Row>
          <Controller
            control={control}
            name="createdAt"
            render={({ field: { onChange, value } }) => (
              <DatePicker
                customInput={
                  <Input label="Data" helperText={errors?.createdAt?.message} error={!!errors?.createdAt?.message} />
                }
                selected={value as Date}
                onChange={date => onChange(date)}
              />
            )}
          />
          <Controller
            control={control}
            name="cost"
            render={({ field: { onChange } }) => (
              <InputMask
                error={!!errors?.cost}
                helperText={errors?.cost?.message}
                label="Valor"
                mask="currency"
                onChange={e => onChange(e)}
                defaultValue={transaction.cost as any}
                actionEnd={
                  <Typography color="grey" shade={300}>
                    BRL
                  </Typography>
                }
              />
            )}
          />
          <Select
            placeholder="Status"
            name="status"
            helperText={errors?.status?.message}
            error={!!errors?.status?.message}
            setValue={setValue}
            defaultValue={watch('status')}
            label="Status"
            items={statusOptions}
          />
        </Row>
        <Row>
          <InputSelectHorizontal
            name="paymentType"
            setValue={setValue}
            label="Tipo de pagamento"
            helperText={errors?.paymentType?.message}
            error={!!errors?.paymentType?.message}
            items={isSpent ? paymentTypeOptionsSpent : paymentTypeOptionsEntrance}
            defaultValue={transaction.paymentType}
          />
        </Row>
        <WrapperButtons>
          <Button type="button" styleType="outlined" variant="grey" onClick={() => setOpen(null)}>
            Cancelar
          </Button>
          <Button type="submit" loading={loading} colorLoading="grey">
            Alterar transação
          </Button>
        </WrapperButtons>
      </Form>
    </Modal>
  );
};
