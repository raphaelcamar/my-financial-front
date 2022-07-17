import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { yupResolver } from '@hookform/resolvers/yup';
import { formatDate, monthStartDate } from '@/core/utils';
import { Container, WrapperButton, StyledButton, StyledInputMask, ModalAddButton } from './styles';
import { useTransactionContext } from '@/transaction/presenters/contexts';
import { InputMask } from '@/core/ui/components/molecules/input-mask';
import { Transaction } from '@/transaction/domain';
import { FilterTransactionSchema } from '@/transaction/data';

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
    const start = formatDate(monthStartDate(new Date()), 'dd/MM/yyyy');
    const limit = formatDate(new Date(), 'dd/MM/yyyy');

    reset({ start, limit });
  }, []);

  const handleSubmitForm = async (data: Transaction.Filter) => {
    try {
      setLoading(true);
      await getTransactions(data);
    } catch (err) {
      enqueueSnackbar(err?.message || 'Aconteceu alguma coisa. Tente novamente depois', { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container onSubmit={handleSubmit(handleSubmitForm)}>
        <StyledInputMask>
          <Controller
            control={control}
            name="start"
            render={({ field: { value, onChange } }) => (
              <InputMask
                validator={!!errors?.start?.message}
                messageValidator={errors?.start?.message}
                label="Início"
                mask="date"
                value={value as string}
                onChange={e => onChange(e)}
              />
            )}
          />
        </StyledInputMask>

        <StyledInputMask>
          <Controller
            control={control}
            name="limit"
            render={({ field: { value, onChange } }) => (
              <InputMask
                validator={!!errors?.limit?.message}
                messageValidator={errors?.limit?.message}
                label="Fim"
                mask="date"
                value={value as string}
                onChange={e => onChange(e)}
              />
            )}
          />
        </StyledInputMask>
        <WrapperButton>
          <StyledButton
            disabled={loading}
            type="submit"
            styleType="outlined"
            loading={loading}
            colorLoading="primary"
            sizeLoading={5}
          >
            Enviar
          </StyledButton>
        </WrapperButton>
        <ModalAddButton variant="primary" type="button" onClick={setOpenModal}>
          {buttonText}
        </ModalAddButton>
      </Container>
    </>
  );
};
