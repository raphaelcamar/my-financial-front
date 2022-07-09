import React from 'react';
import { Typography } from '@/core/presenters/components/atoms';
import { WrapperMessage, Container, Inputs } from './styles';
import { Button } from '@/core/presenters/components/molecules';
import { InputPassword } from '@/core/presenters/components/organisms';
import { usePasswordThirdStep } from '@/access-and-auth/presenters/hooks/';

export const PasswordThirdStep: React.FC = () => {
  const { errors, loading, handleSubmit, onSubmit, register } = usePasswordThirdStep();

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <WrapperMessage>
        <Typography type="h1" size="xxxlarge" weight={700}>
          Recuperação de senha
        </Typography>
        <Typography size="large">Informe sua nova senha</Typography>
      </WrapperMessage>
      <Inputs>
        <InputPassword
          label="Senha"
          error={!!errors?.password?.message}
          helperText={errors?.password?.message}
          {...register('password')}
        />
        <InputPassword
          actionEnd="Teste"
          label="Confirme sua senha"
          error={!!errors?.confirm_password?.message}
          helperText={errors?.confirm_password?.message}
          {...register('confirm_password')}
        />
        <Button loading={loading}>Enviar</Button>
      </Inputs>
    </Container>
  );
};
