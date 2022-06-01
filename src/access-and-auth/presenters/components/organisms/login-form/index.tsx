import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTheme } from '@mui/material';
import { useSnackbar } from 'notistack';
import { Button } from '@/core/presenters/components/molecules';
import { Input } from '@/core/presenters/components/molecules/input';
import {
  AuthTitle,
  HeaderLogin,
  RemeberForgotContainer,
  RedirectLink,
} from '@/access-and-auth/presenters/components/atoms';
import { useStyles } from './styles';
import { CircularProgress, Icon } from '@/core/presenters/components/atoms';
import { User } from '@/access-and-auth/domain';
import { useAccessAndAuthContext } from '@/access-and-auth/presenters/contexts';
import { UseFormValidation } from '@/core/presenters/hooks';
import { loginSchemaValidator } from '@/access-and-auth/data';

export const LoginForm: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { userAuth } = useAccessAndAuthContext();
  const { enqueueSnackbar } = useSnackbar();
  const { messageFields, onChange, isValid, onSubmit } = UseFormValidation<User.Login>(loginSchemaValidator());

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: User.Login): Promise<void> => {
    try {
      setLoading(true);
      await userAuth(e);
    } catch (err) {
      enqueueSnackbar(err?.message || 'Não foi possível fazer o login. Tente novamente mais tarde', {
        variant: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.login}>
      <HeaderLogin />
      <div className={classes.wrapper}>
        <form className={classes.container} onSubmit={e => onSubmit(e, handleSubmit)}>
          <AuthTitle title="Bem vindo de volta" description="Seja bem vindo de volta! Entre com suas credenciais." />
          <Input
            icon="person"
            label="Email"
            name="email"
            onChange={onChange}
            validator={!!messageFields?.email?.message}
            messageValidator={messageFields?.email?.message}
          />
          <Input
            icon="key"
            label="Senha"
            type="password"
            name="password"
            validator={!!messageFields?.password?.message}
            messageValidator={messageFields?.password?.message}
            onChange={onChange}
          />
          <RemeberForgotContainer name="rememberMe" onChange={onChange} />
          <Button className={classes.button} disabled={!isValid}>
            {loading ? <CircularProgress size={25} color="inherit" /> : 'Login'}
          </Button>
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
            Entre com o google
          </Button>
          <div className={classes.link}>
            <RedirectLink question="Não possui conta?" link="Inscreva-se!" to="/subscribe" />
          </div>
        </form>
      </div>
    </div>
  );
};
