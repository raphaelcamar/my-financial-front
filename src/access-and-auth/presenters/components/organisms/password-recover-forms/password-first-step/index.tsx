import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input } from '@/core/presenters/components/molecules';
import { ContainerForm, WrapperMessage } from './styles';
import { Typography } from '@/core/presenters/components/atoms';
import { User } from '@/access-and-auth/domain';
import { useAccessAndAuthContext } from '@/access-and-auth/presenters/contexts';
import { RecoverPasswordValidator } from '@/access-and-auth/data';

type DataForm = Pick<User.Login, 'email'>;

export const PasswordFirstStep: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();
  const { recoverPassworSendEmail } = useAccessAndAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataForm>({
    resolver: yupResolver(RecoverPasswordValidator),
  });

  const handleSubmitForm = async (data: DataForm) => {
    try {
      setLoading(true);
      await recoverPassworSendEmail(data.email);
    } catch (err) {
      enqueueSnackbar(err?.message || 'Aconteceu algo. Tente novamente depois', {
        variant: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

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
