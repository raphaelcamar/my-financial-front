import React, { useState } from 'react';
import { useTheme } from '@mui/material';
import { Button } from '@/core/presenters/components/molecules';
import { Input } from '@/core/presenters/components/molecules/input';
import {
  AuthTitle,
  HeaderLogin,
  RemeberForgotContainer,
  RedirectLink,
} from '@/access-and-auth/presenters/components/molecules';
import { useStyles } from './styles';
import { Icon } from '@/core/presenters/components/atoms';
import { User } from '@/access-and-auth/domain';

export const LoginForm: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [formLogin, setFormLogin] = useState<User.Login>({ email: '', password: '', rememberMe: false });

  const handleChangeFormLogin = (key: string, value: string | boolean): void => {
    setFormLogin({
      ...formLogin,
      [key]: value,
    });
  };

  return (
    <div>
      <div className={classes.login}>
        <HeaderLogin />
        <div className={classes.wrapper}>
          <div className={classes.container}>
            <AuthTitle title="Bem vindo de volta" description="Seja bem vindo de volta! Entre com suas credenciais." />
            <Input icon="person" label="Email" onChange={e => handleChangeFormLogin('email', e.target.value)} />
            <Input
              icon="key"
              label="Senha"
              inputProps={{ type: 'password' }}
              onChange={e => handleChangeFormLogin('password', e.target.value)}
            />
            <RemeberForgotContainer
              value={formLogin?.rememberMe || false}
              onChange={e => handleChangeFormLogin('rememberMe', e.target.checked)}
            />
            <Button className={classes.button} onClick={() => console.log(formLogin)}>
              Login
            </Button>
            <Button className={classes.button} variant="fullfiled" color="#4A4A4A" background={theme.palette.grey[200]}>
              <Icon icon="google" />
              Entre com o google
            </Button>
            <div className={classes.link}>
              <RedirectLink question="Não possui conta?" link="Inscreva-se!" to="/subscribe" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
