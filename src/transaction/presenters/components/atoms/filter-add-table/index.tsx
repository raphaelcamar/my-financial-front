import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { formatDate, monthStartDate } from '@/core/presenters/utils';
import { Container, WrapperButton, StyledButton, StyledInputMask, ModalAddButton } from './styles';
import { useTransactionContext } from '@/transaction/presenters/contexts';
import { InputMask } from '@/core/presenters/components/molecules/input-mask';
import { Transaction } from '@/transaction/domain';

interface IFilterAddTable {
  setOpenModal: () => void;
  buttonText: string;
}

export const FilterAddTable: React.FC<IFilterAddTable> = ({ setOpenModal, buttonText }) => {
  const { reset, handleSubmit, control } = useForm<Transaction.Filter>();

  const { getTransactions } = useTransactionContext();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const start = formatDate(monthStartDate(new Date()), 'dd/MM/yyyy');
    const limit = formatDate(new Date(), 'dd/MM/yyyy');

    reset({ start, limit });
  }, []);

  const handleSubmitForm = async (data: Transaction.Filter) => {
    try {
      await getTransactions(data);
    } catch (err) {
      enqueueSnackbar(err?.message || 'Aconteceu alguma coisa. Tente novamente depois', { variant: 'error' });
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
                validator={false}
                messageValidator=""
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
                validator={false}
                messageValidator=""
                label="Fim"
                mask="date"
                value={value as string}
                onChange={e => onChange(e)}
              />
            )}
          />
        </StyledInputMask>
        <WrapperButton>
          <StyledButton type="submit">Enviar</StyledButton>
        </WrapperButton>
        <ModalAddButton variant="primary" type="button" onClick={setOpenModal}>
          {buttonText}
        </ModalAddButton>
      </Container>
    </>
  );
};
