import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { CircularProgress, Icon, SubscribeIllustration, Typography } from '@/core/presenters/components/atoms';
import { Button, Input } from '@/core/presenters/components/molecules';
import { useStyles } from './styles';
import { UserSubscribeValidatorSchema } from '@/access-and-auth/data';
import { User } from '@/access-and-auth/domain';
import { useAccessAndAuthContext } from '@/access-and-auth/presenters/contexts';

export const Subscribe: React.FC = () => {
  const classes = useStyles();

  const [errorMessage, setErrorMessage] = useState<string>(null);
  const [loading, setLoading] = useState(false);

  const { newUser, user } = useAccessAndAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/transacoes');
  }, [user]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User.Subscribe>({
    resolver: yupResolver(UserSubscribeValidatorSchema),
  });

  const handleSubmitForm = async (data: User.Subscribe) => {
    setLoading(true);

    try {
      await newUser(data);
      navigate('/transacoes');
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.illustration}>
        <div className={classes.spacing}>
          <Icon icon="logo" color="white" />
        </div>
        <SubscribeIllustration />
      </div>
      <div className={classes.subscribe}>
        <Typography variant="h2">Cadastro</Typography>
        <Typography variant="body1">Controle suas finanças de uma forma simples!</Typography>
        <form className={classes.form} onSubmit={handleSubmit(handleSubmitForm)}>
          <Input
            label="Nome"
            inputProps={{
              placeholder: 'Ex: Raphael',
              ...register('name'),
            }}
            validator={!!errors?.name}
            messageValidator={errors?.name?.message}
            icon="person"
            tooltipMessage="sda"
          />
          <Input
            label="Sobrenonme"
            messageValidator={errors?.lastname?.message}
            validator={!!errors?.lastname}
            inputProps={{
              ...register('lastname'),
              placeholder: 'Ex: Santantonio',
            }}
            icon="person"
          />
          <Input
            label="Email"
            messageValidator={errors?.email?.message}
            validator={!!errors?.email}
            inputProps={{
              ...register('email'),
              placeholder: 'ex: raphael1234@email.com',
            }}
            icon="mail"
          />

          <Input
            label="Senha"
            messageValidator={errors?.password?.message}
            validator={!!errors?.password}
            inputProps={{
              type: 'password',
              ...register('password'),
              placeholder: 'Sua senha',
            }}
            icon="key"
          />
          <Button size="large" variant="fullfiled" disabled={loading} type="submit">
            {loading ? <CircularProgress size={25} color="primary" /> : 'Login'}
          </Button>
          {errorMessage && <div className={classes.messageValidator}>{errorMessage}</div>}
        </form>
      </div>
    </div>
  );
};
