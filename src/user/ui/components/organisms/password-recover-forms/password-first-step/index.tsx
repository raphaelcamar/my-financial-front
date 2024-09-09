import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input } from '@/core/ui/components/molecules';
import { ContainerForm, WrapperMessage } from './styles';
import { Typography } from '@/core/ui/components/atoms';
import { useAccessContext } from '@/user/presenters/contexts/access';
import { RecoverPasswordValidator } from '@/user/data/use-cases/access';
import { User } from '@/user/domain';

type DataForm = Pick<User.Login, 'email'>;

interface IPasswordFirstStep {
  handleChangeStep: () => void;
}

export const PasswordFirstStep: React.FC<IPasswordFirstStep> = ({ handleChangeStep }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();
  const { recoverPassworSendEmail } = useAccessContext();

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
      handleChangeStep();
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
