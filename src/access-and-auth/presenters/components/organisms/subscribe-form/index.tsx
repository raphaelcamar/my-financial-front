import React, { useState } from 'react';
import { useTheme } from '@mui/material';
import { useNavigate } from 'react-router';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { HeaderSubscribe, RedirectLink } from '@/access-and-auth/presenters/components/atoms';
import { useStyles } from './styles';
import { Button, Input } from '@/core/presenters/components/molecules';
import { CircularProgress, Icon } from '@/core/presenters/components/atoms';
import { User } from '@/access-and-auth/domain';
import { UserSubscribeValidatorSchema } from '@/access-and-auth/data';
import { useAccessAndAuthContext } from '@/access-and-auth/presenters/contexts';

export const SubscribeForm: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { newUser } = useAccessAndAuthContext();
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
      navigate('/transacoes');
    } catch (err) {
      enqueueSnackbar(err?.message || 'Não foi possível fazer o cadastro. Tente novamente mais tarde', {
        variant: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.container}>
      <HeaderSubscribe />
      <form className={classes.form} onSubmit={handleSubmit(handleSubmitForm)}>
        <Input
          icon="person"
          label="Nome"
          name="name"
          {...register('name')}
          validator={!!errors?.name?.message}
          messageValidator={errors?.name?.message}
        />

        <Input
          icon="person"
          label="Sobrenome"
          name="lastname"
          {...register('lastname')}
          validator={!!errors?.lastname?.message}
          messageValidator={errors?.lastname?.message}
        />

        <Input
          icon="mail"
          label="Email"
          name="email"
          {...register('email')}
          validator={!!errors?.email?.message}
          messageValidator={errors?.email?.message}
        />

        <Input
          icon="key"
          label="Senha"
          name="password"
          type="password"
          {...register('password')}
          validator={!!errors?.password?.message}
          messageValidator={errors?.password?.message}
        />

        <Button className={classes.button}>{loading ? <CircularProgress size={25} color="inherit" /> : 'Login'}</Button>
      </form>

      <Button
        onClick={() => {
          // TODO
        }}
        type="button"
        className={classes.button}
        variant="fullfiled"
        color="#4A4A4A"
        background={theme.palette.grey[200]}
      >
        <Icon icon="google" />
        Inscreva-se com o google
      </Button>
      <div className={classes.question}>
        <RedirectLink question="Já possui conta?" link="Faça login" to="/login" />
      </div>
    </div>
  );
};
