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
import { Typography } from '@/core/ui/components/atoms';
import { useSpentsAndRevenuesContext } from '@/transaction/presenters/contexts/spents-and-revenues/context';
import { delay } from '@/core/utils';

type AddSpentFormProps = {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AddSpentForm = ({ onClose }: AddSpentFormProps): ReactElement => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm<Transaction.Data>({ resolver: yupResolver(CreateSpentTransactionSchema) });

  const { user } = useAccessContext();
  const { createTransaction } = useSpentsAndRevenuesContext();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setValue('walletId', user?.currentWallet?.id);
  }, [user]);

  const handleSubmitForm = async (data: Transaction.Data) => {
    try {
      setLoading(true);
      await delay(2500);
      await createTransaction({ ...data, type: 'SPENT', billedAt: new Date(), coin: 'BRL' });
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

  return (
    <>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <Input
          label="Tópico"
          {...register('topic')}
          error={!!errors?.topic?.message}
          helperText={errors?.topic?.message}
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
            defaultValue=""
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
