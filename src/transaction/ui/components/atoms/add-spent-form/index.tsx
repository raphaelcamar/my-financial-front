import React, { ReactElement, useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
import { Button, Input, InputMask, Select } from '@/core/ui/components/molecules';
import { Transaction, TypeStatus } from '@/transaction/domain';
import { CreateSpentTransactionSchema } from '@/transaction/data';
import { Form, WrapperButtons, WrapperInputs } from './styles';
import { SelectType } from '@/core/domain';
import { useAccessContext } from '@/user/presenters';
import { InputSelectHorizontal, ItemSelectHorizontalProps, Typography } from '@/core/ui/components/atoms';
import { useSpentsAndRevenuesContext } from '@/transaction/presenters/contexts/spents-and-revenues/context';
import { delay } from '@/core/utils';

type AddSpentFormProps = {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AddSpentForm = ({ onClose }: AddSpentFormProps): ReactElement => {
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<Transaction.Data>({ resolver: yupResolver(CreateSpentTransactionSchema) });

  const { user } = useAccessContext();
  const { createTransaction } = useSpentsAndRevenuesContext();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setValue('walletId', user?.currentWallet?.id);
    setValue('status', 'FINISHED');
  }, [user]);

  const handleSubmitForm = async (data: Transaction.Data) => {
    try {
      setLoading(true);
      await createTransaction({ ...data, type: 'SPENT', billedAt: new Date(), coin: 'BRL' });

      enqueueSnackbar('Criação criada com sucesso!', {
        variant: 'success',
      });

      reset({});

      onClose(false);
    } catch (err) {
      enqueueSnackbar(err?.message || 'Não foi possível criar a transação. Tente novamente mais tarde', {
        variant: 'error',
      });
    } finally {
      setLoading(false);
      onClose(false);
    }
  };

  const walletOptions: SelectType<string>[] = user?.wallets
    ? user?.wallets?.map(wallet => ({ text: `${wallet.name}`, value: wallet.id }))
    : [];

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

  const topicOptions: ItemSelectHorizontalProps[] = [
    { label: 'Saúde', value: 'HEALTH' },
    { label: 'Transporte', value: 'TRANSPORT' },
    { label: 'Alimentação', value: 'FOOD' },
    { label: 'Lazer', value: 'LEISURE' },
    { label: 'Outro', value: 'OTHER' },
  ];

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

  return (
    <>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <InputSelectHorizontal
          name="topic"
          setValue={setValue}
          label="Tópico"
          helperText={errors?.topic?.message}
          error={!!errors?.topic?.message}
          items={topicOptions}
        />

        <InputSelectHorizontal
          name="paymentType"
          setValue={setValue}
          label="Tipo de pagamento"
          helperText={errors?.paymentType?.message}
          error={!!errors?.paymentType?.message}
          items={paymentTypeOptions}
        />
        <WrapperInputs>
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
            value={watch('status')}
            label="Status"
            items={statusOptions}
          />
        </WrapperInputs>

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
        <Input
          label="Anotação"
          {...register('anotation')}
          error={!!errors?.anotation?.message}
          helperText={errors?.anotation?.message}
        />

        <WrapperButtons>
          <Button type="button" styleType="outlined" variant="grey" onClick={() => onClose(null)}>
            Cancelar
          </Button>
          <Button type="submit" loading={loading} colorLoading="grey">
            Enviar
          </Button>
        </WrapperButtons>
      </Form>
    </>
  );
};
