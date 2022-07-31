import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useAccessAndAuthContext } from '@/access-and-auth/presenters/contexts';
import { RecoverPasswordValidator } from '@/access-and-auth/data';
import { User } from '@/access-and-auth/domain';

type DataForm = Pick<User.Login, 'email'>;

export const usePasswordFirstStep = (handleChangeStep: () => void) => {
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
      handleChangeStep();
    } catch (err) {
      enqueueSnackbar(err?.message || 'Aconteceu algo. Tente novamente depois', {
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
