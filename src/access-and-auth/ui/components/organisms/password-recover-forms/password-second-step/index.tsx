import React, { useEffect } from 'react';
import { Typography } from '@/core/presenters/components/atoms';

import { ContainerForm, WrapperMessage, WrapperInputPin, WrapperError } from './styles';
import { InputPin, Countdown } from '@/access-and-auth/ui/components/atoms';
import { Button } from '@/core/presenters/components/molecules';
import { usePasswordSecondStep } from '@/access-and-auth/presenters';

interface IPasswordSecondStep {
  handleChangeStep?: () => void;
}

export const PasswordSecondStep: React.FC<IPasswordSecondStep> = ({ handleChangeStep }) => {
  const {
    error,
    loading,
    handleChangeInput,
    changePinFocus,
    handleKeyDown,
    handleSendNewCode,
    handleSubmitForm,
    signRef,
  } = usePasswordSecondStep(handleChangeStep);

  useEffect(() => {
    changePinFocus(0);
  }, []);

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
