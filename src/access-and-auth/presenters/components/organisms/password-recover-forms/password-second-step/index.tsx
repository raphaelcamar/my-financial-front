/* eslint-disable no-useless-return */
/* eslint-disable no-multi-assign */
import React, { useEffect, useRef, useState } from 'react';
import { useSnackbar } from 'notistack';
import { Typography } from '@/core/presenters/components/atoms';

import { ContainerForm, WrapperMessage, WrapperInputPin, WrapperError } from './styles';
import { InputPin, Countdown } from '@/access-and-auth/presenters/components/atoms';
import { Button } from '@/core/presenters/components/molecules';
import { CodeRecoverValidator } from '@/access-and-auth/data';
import { ValidationComposite } from '@/core/validation';

interface IPasswordSecondStep {
  handleChangeSecondStep?: () => void;
}

export const PasswordSecondStep: React.FC<IPasswordSecondStep> = ({ handleChangeSecondStep }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const [loading, setLoading] = useState<boolean>(false);
  const [pinValue, setPinValue] = useState<string[]>(new Array(5).fill(''));
  const [error, setError] = useState<string>(null);

  const { enqueueSnackbar } = useSnackbar();

  const changePinFocus = (index: number): void => {
    const ref = inputRefs.current[index];
    if (ref) {
      ref.focus();
    }
  };

  useEffect(() => {
    changePinFocus(0);
  }, []);

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = new ValidationComposite(CodeRecoverValidator());
      const message = result.validate('code', pinValue.join(''));
      setError(message);
      if (!message) {
        handleChangeSecondStep();
      }
    } catch (err) {
      enqueueSnackbar(err?.message || 'Algo aconteceu. Tente novamente depois', {
        variant: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const signRef = (el: HTMLInputElement, index: number): void => {
    if (el) {
      inputRefs.current[index] = el;
    }
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>, position: number): void => {
    const { value } = e.target;
    const arr = pinValue;
    arr[position] = value;

    if (value) {
      setPinValue(arr);
      changePinFocus(position + 1);
    } else {
      changePinFocus(position);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, position: number): void => {
    const keyboardKeyCode = e.nativeEvent.code;

    if (keyboardKeyCode !== 'Backspace') {
      return;
    }

    if (!pinValue[position]) {
      changePinFocus(position - 1);
    }
  };

  const handleSendNewCode = () => {
    // TODO send new code
  };

  return (
    <ContainerForm onSubmit={e => handleSubmitForm(e)}>
      <WrapperMessage>
        <Typography type="h1" size="xxxlarge" weight={700}>
          Informe o código
        </Typography>
        <Typography size="large">Informe o código enviado para seu E-mail</Typography>
      </WrapperMessage>
      <Countdown reset={() => handleSendNewCode()} />
      <WrapperInputPin>
        {Array.from({ length: 6 }, (_, index) => (
          <InputPin
            onKeyDown={e => handleKeyDown(e, index)}
            onChange={event => handleChangeInput(event, index)}
            ref={el => signRef(el, index)}
          />
        ))}
      </WrapperInputPin>
      {error && <WrapperError>{error}</WrapperError>}
      <Button loading={loading}>Enviar</Button>
    </ContainerForm>
  );
};
