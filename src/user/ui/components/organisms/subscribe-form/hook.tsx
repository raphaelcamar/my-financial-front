import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { User } from '@/user/domain';
import { UserSubscribeValidatorSchema } from '@/user/data/use-cases/access';
import { useAccessContext } from '@/user/presenters/contexts/access';

export const useSubscribeForm = () => {
  const { newUser } = useAccessContext();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User.Subscribe>({
    resolver: yupResolver(UserSubscribeValidatorSchema),
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmitForm = async (data: User.Subscribe) => {
    setLoading(true);

    try {
      await newUser(data);
      navigate('/despesas-e-receitas');
    } catch (err) {
      enqueueSnackbar(err?.message || 'Não foi possível fazer o cadastro. Tente novamente mais tarde', {
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
    handleSubmitForm,
  };
};
