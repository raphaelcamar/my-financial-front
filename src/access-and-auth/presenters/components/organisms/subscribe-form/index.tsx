import React, { useState } from 'react';
import { useTheme } from '@mui/material';
import { useNavigate } from 'react-router';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LogoName, HeaderSubscribe, RedirectLink } from '@/access-and-auth/presenters/components/atoms';
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
      <LogoName />
      <HeaderSubscribe />
      <form className={classes.form} onSubmit={handleSubmit(handleSubmitForm)}>
        <Input
          actionStart={<Icon icon="person" />}
          label="Nome"
          name="name"
          {...register('name')}
          error={!!errors?.name?.message}
          helperText={errors?.name?.message}
        />

        <Input
          actionStart={<Icon icon="person" />}
          label="Sobrenome"
          name="lastname"
          {...register('lastname')}
          error={!!errors?.lastname?.message}
          helperText={errors?.lastname?.message}
        />

        <Input
          actionStart={<Icon icon="mail" />}
          label="Email"
          name="email"
          {...register('email')}
          error={!!errors?.email?.message}
          helperText={errors?.email?.message}
        />

        <Input
          actionStart={<Icon icon="key" />}
          label="Senha"
          name="password"
          type="password"
          {...register('password')}
          error={!!errors?.password?.message}
          helperText={errors?.password?.message}
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
