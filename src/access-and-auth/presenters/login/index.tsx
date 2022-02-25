import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Icon, Typography } from '@/core/presenters/components/atoms';
import { useStyles } from './styles';
import { Input } from '../../../core/presenters/components/atoms/input';
import StyledCheckbox from '../../../core/presenters/components/atoms/checkbox';
import { LoginIllustration } from '../../../core/presenters/components/atoms/illustation-login';
import { CircularProgress } from '../../../core/presenters/components/atoms/circular-progress';
import { UserLoginValidatorSchema } from '@/access-and-auth/data';
import { Login as LoginTypeForm } from '@/access-and-auth/domain';

type FormLoginProps = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const Login: React.FC = () => {
  const classes = useStyles();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginTypeForm>({
    resolver: yupResolver(UserLoginValidatorSchema),
  });

  const handleSubmitForm = (e: any) => {
    // handleSubmit();
    e.preventDefault();
  };


  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className={classes.container}>
      <div className={classes.login}>
        <div className={classes.spacing}>
          <Icon icon="logo" />
        </div>
        <div className={classes.formContainer}>
          <Typography variant="h2">Login</Typography>
          <Typography variant="body1">
            Controle suas finanças de uma forma simples!
          </Typography>
          <Button variant="outlined" className={classes.buttonLoginGoogle}>
            Logue com sua conta Google
          </Button>

          <div className={classes.emailLogin}>
            <div className={classes.line} />
            <Typography variant="body1">Ou logue com seu e-mail</Typography>
            <div className={classes.line} />
          </div>
          <form className={classes.form} onSubmit={handleSubmitForm}>
            <Input
              label="E-mail"
              inputProps={{
                placeholder: 'Ex: email@email.com',
              }}
              {...register('email')}
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
              icon="person"
            />
            <StyledCheckbox
              label="Lembre-se de mim"
              props={{ ...register('rememberMe') }}
            />
            <Button
              variant="contained"
              className={classes.buttonLogin}
              disabled={loading}
              type="submit"
            >
              {loading ? (
                <CircularProgress size={25} color="primary" />
              ) : (
                'Login'
              )}
            </Button>
          </form>
        </div>
      </div>
      <div className={classes.illustration}>
        <LoginIllustration />
      </div>
    </div>
  );
};
