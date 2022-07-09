import React from 'react';
import { Typography } from '@/core/ui/components/atoms';
import { WrapperMessage, Container, Inputs } from './styles';
import { Button } from '@/core/ui/components/molecules';
import { InputPassword } from '@/core/ui/components/organisms';
import { usePasswordThirdStep } from './hook';

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
