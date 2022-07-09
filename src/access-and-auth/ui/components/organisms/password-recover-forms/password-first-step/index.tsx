import React from 'react';
import { Button, Input } from '@/core/presenters/components/molecules';
import { ContainerForm, WrapperMessage } from './styles';
import { Typography } from '@/core/presenters/components/atoms';
import { usePasswordFirstStep } from '@/access-and-auth/presenters/hooks/password-first-step';

interface IPasswordFirstStep {
  handleChangeStep: () => void;
}

export const PasswordFirstStep: React.FC<IPasswordFirstStep> = ({ handleChangeStep }) => {
  const { errors, handleSubmit, handleSubmitForm, loading, register } = usePasswordFirstStep(handleChangeStep);

  return (
    <ContainerForm onSubmit={handleSubmit(handleSubmitForm)}>
      <WrapperMessage>
        <Typography type="h1" size="xxxlarge" weight={700}>
          Esqueceu sua senha
        </Typography>
        <Typography size="large">Informe o seu e-mail abaixo. Enviaremos um código de confirmação</Typography>
      </WrapperMessage>
      <Input
        name="email"
        label="E-mail"
        placeholder="Informe seu E-mail"
        {...register('email')}
        helperText={errors?.email?.message}
        error={!!errors?.email?.message}
      />
      <Button loading={loading}>Enviar</Button>
    </ContainerForm>
  );
};
