import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Icon, Typography } from '@/core/presenters/components/atoms';
import { useStyles } from './styles';
import { Input } from '../../../core/presenters/components/atoms/input';
import StyledCheckbox from '../../../core/presenters/components/atoms/checkbox';
import { LoginIllustration } from '../../../core/presenters/components/atoms/illustation-login';
import { CircularProgress } from '../../../core/presenters/components/atoms/circular-progress';

type FormLoginProps = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const Login: React.FC = () => {
  const classes = useStyles();

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
          <form className={classes.form}>
            <Input label="E-mail" placeholder="Ex: email@email.com" />
            <Input
              label="Senha"
              placeholder="Sua senha"
              messageValidator="Senha obrigatória"
              inputProps={{
                type: 'password',
              }}
            />
            <StyledCheckbox label="Lembre-se de mim" props={{}} />
            <Button
              variant="contained"
              className={classes.buttonLogin}
              disabled={loading}
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
