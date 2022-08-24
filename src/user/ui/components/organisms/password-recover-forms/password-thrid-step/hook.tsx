import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { RecoverPasswordSendPassword } from '@/user/data/use-cases/access';
import { useAccessContext } from '@/user/presenters/contexts/access';

interface PasswordTwoSteps {
  password: string;
  confirm_password: string;
}

export const usePasswordThirdStep = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const { sendNewPassword } = useAccessContext();

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

  return {
    register,
    handleSubmit,
    onSubmit,
    loading,
    errors,
  };
};
