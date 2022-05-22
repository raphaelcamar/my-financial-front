import React from 'react';
import { useTheme } from '@mui/material';
import { Button, Input } from '@/core/presenters/components/molecules';
import {
  AuthTitle,
  HeaderLogin,
  RemeberForgotContainer,
  RedirectLink,
} from '@/access-and-auth/presenters/components/molecules';
import { useStyles } from './styles';
import { Icon } from '@/core/presenters/components/atoms';

export const LoginForm: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div>
      {' '}
      <div className={classes.login}>
        <HeaderLogin />
        <div className={classes.wrapper}>
          <div className={classes.container}>
            <AuthTitle title="Bem vindo de volta" description="Seja bem vindo de volta! Entre com suas credenciais." />
            <Input icon="person" label="Email" />
            <Input icon="key" label="Senha" inputProps={{ type: 'password' }} />
            <RemeberForgotContainer />
            <Button className={classes.button}>Login</Button>
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
