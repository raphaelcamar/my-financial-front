import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { Icon, Typography, LoginIllustration, CircularProgress } from '@/core/presenters/components/atoms';
import { Input, Button } from '@/core/presenters/components/molecules';
import { useStyles } from './styles';
import { UserLoginValidatorSchema } from '@/access-and-auth/data';
import { UserLogin as LoginTypeForm } from '@/access-and-auth/domain';
import { useAccessAndAuthContext } from '@/access-and-auth/presenters/contexts/access-and-auth/';

type FormLoginProps = {
  email: string;
  password: string;
};

export const Login: React.FC = () => {
  const classes = useStyles();

  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>(null);
  const { userAuth, verifyUserAuth } = useAccessAndAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (verifyUserAuth()) navigate('/');
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginTypeForm>({
    resolver: yupResolver(UserLoginValidatorSchema),
  });

  const handleSubmitForm = async (data: FormLoginProps) => {
    setLoading(true);
    try {
      await userAuth(data);
      navigate('/');
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.login}>
        <div className={classes.spacing}>
          <Icon icon="logo" />
        </div>
        <div className={classes.formContainer}>
          <Typography variant="h2">Login</Typography>
          <Typography variant="body1">Controle suas finanças de uma forma simples!</Typography>
          {/* <Button variant="outlined">Logue com sua conta Google</Button> */}

          <div className={classes.emailLogin}>
            <div className={classes.line} />
            {/* <Typography variant="body1">Ou logue com seu e-mail</Typography> */}
            <div className={classes.line} />
          </div>
          <form className={classes.form} onSubmit={handleSubmit(handleSubmitForm)}>
            <Input
              label="E-mail"
              inputProps={{
                placeholder: 'Ex: email@email.com',
                ...register('email'),
              }}
              validator={!!errors?.email}
              messageValidator={errors?.email?.message}
              icon="person"
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
            <Button variant="fullfiled" size="large" disabled={loading} type="submit">
              {loading ? <CircularProgress size={25} color="primary" /> : 'Login'}
            </Button>
            {errorMessage && <div className={classes.messageValidator}>{errorMessage}</div>}
          </form>
        </div>
      </div>
      <div className={classes.illustration}>
        <LoginIllustration />
      </div>
    </div>
  );
};
