import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { yupResolver } from '@hookform/resolvers/yup';
import { monthStartDate } from '@/core/utils';
import { Container, StyledButton, StyledInputMask, ModalAddButton } from './styles';
import { useTransactionContext } from '@/transaction/presenters/contexts';
import { Transaction } from '@/transaction/domain';
import { FilterTransactionSchema } from '@/transaction/data';
import { DatePicker } from '@/core/ui/components/atoms';
import { Input } from '@/core/ui/components/molecules';

interface ITableActions {
  setOpenModal: () => void;
  buttonText: string;
}

export const TableActions: React.FC<ITableActions> = ({ setOpenModal, buttonText }) => {
  const {
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Transaction.Filter>({
    resolver: yupResolver(FilterTransactionSchema),
  });

  const { getTransactions } = useTransactionContext();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const start = monthStartDate(new Date());
    const limit = new Date();

    reset({ start, limit });
  }, []);

  const handleSubmitForm = async (data: Transaction.Filter) => {
    try {
      setLoading(true);
      // await getTransactions(data);
    } catch (err) {
      enqueueSnackbar(err?.message || 'Aconteceu alguma coisa. Tente novamente depois', { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container onSubmit={handleSubmit(handleSubmitForm)}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center' }}>
          <StyledInputMask>
            <Controller
              control={control}
              name="start"
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  customInput={
                    <Input label="Início" helperText={errors?.start?.message} error={!!errors?.start?.message} />
                  }
                  selected={value as Date}
                  onChange={date => onChange(date)}
                />
              )}
            />
          </StyledInputMask>

          <StyledInputMask>
            <Controller
              control={control}
              name="limit"
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  customInput={
                    <Input label="Limite" helperText={errors?.limit?.message} error={!!errors?.limit?.message} />
                  }
                  selected={value as Date}
                  onChange={date => onChange(date)}
                />
              )}
            />
          </StyledInputMask>
          <StyledButton
            disabled={loading}
            type="submit"
            styleType="outlined"
            loading={loading}
            colorLoading="primary"
            sizeLoading={5}
            hasHelperText={!!errors?.start?.message || !!errors?.limit?.message}
          >
            Enviar
          </StyledButton>
        </div>
        <ModalAddButton
          variant="primary"
          type="button"
          onClick={setOpenModal}
          hasHelperText={!!errors?.start?.message || !!errors?.limit?.message}
        >
          {buttonText}
        </ModalAddButton>
      </Container>
    </>
  );
};
