import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router';
import { Typography } from '@/core/presenters/components/atoms';
import { WrapperMessage, Container, Inputs } from './styles';
import { Button } from '@/core/presenters/components/molecules';
import { RecoverPasswordSendPassword } from '@/access-and-auth/data';
import { useAccessAndAuthContext } from '@/access-and-auth/presenters/contexts';
import { InputPassword } from '@/core/presenters/components/organisms';

interface PasswordTwoSteps {
  password: string;
  confirm_password: string;
}

export const PasswordThirdStep: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const { sendNewPassword } = useAccessAndAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordTwoSteps>({ resolver: yupResolver(RecoverPasswordSendPassword) });

  const onSubmit = async (data: PasswordTwoSteps) => {
    try {
      setLoading(true);
      await sendNewPassword(data.password);

      enqueueSnackbar('Senha alterada com sucesso! Você será redirecionado para o login', {
        variant: 'success',
      });
      setTimeout(() => navigate('/login'), 3000);
    } catch (err) {
      enqueueSnackbar(err?.message || 'Não foi possível recuperar sua senha, tente novamente depois', {
        variant: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

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
