import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { User } from '@/access-and-auth/domain';
import { UserLoginValidatorSchema } from '@/access-and-auth/data';
import { useAccessAndAuthContext } from '@/access-and-auth/presenters/contexts';

export const useLoginForm = () => {
  const { userAuth } = useAccessAndAuthContext();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User.Login>({ resolver: yupResolver(UserLoginValidatorSchema) });

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (e: User.Login): Promise<void> => {
    try {
      setLoading(true);
      await userAuth(e);
      navigate('/transacoes');
    } catch (err) {
      enqueueSnackbar(err?.message || 'Não foi possível fazer o login. Tente novamente mais tarde', {
        variant: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    errors,
    loading,
    register,
    handleSubmit,
    onSubmit,
  };
};
