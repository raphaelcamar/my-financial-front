import React, { useCallback, useState } from 'react';
import { useTheme } from '@mui/material';
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
import { useValidationForm } from '@/core/presenters/hooks';
import { loginSchemaValidator } from '@/access-and-auth/data';

export const LoginForm: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [formLogin, setFormLogin] = useState<User.Login>({ email: '', password: '', rememberMe: true });
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>(null);

  const { messageFields, validate, isFormValid } = useValidationForm<User.Login>(formLogin, loginSchemaValidator());

  const { userAuth } = useAccessAndAuthContext();

  const handleChangeFormLogin = useCallback(
    (key: string, value: string | boolean) => {
      setFormLogin({
        ...formLogin,
        [key]: value,
      });
    },
    [formLogin]
  );

  const handleSubmit = async (e): Promise<void> => {
    e.preventDefault();
    validate();

    if (isFormValid()) {
      try {
        setLoading(true);
        await userAuth(formLogin);
      } catch (err) {
        setErrorMessage(err?.message || 'Não foi possível fazer o login. Tente novamente mais tarde');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className={classes.login}>
      <HeaderLogin />
      <div className={classes.wrapper}>
        <form className={classes.container} onSubmit={e => handleSubmit(e)}>
          <AuthTitle title="Bem vindo de volta" description="Seja bem vindo de volta! Entre com suas credenciais." />
          <Input
            icon="person"
            label="Email"
            value={formLogin?.email}
            onChange={e => handleChangeFormLogin('email', e.target.value)}
            validator={!!messageFields?.email?.message}
            messageValidator={messageFields?.email?.message}
          />
          <Input
            icon="key"
            label="Senha"
            type="password"
            value={formLogin?.password}
            validator={!!messageFields?.password?.message}
            messageValidator={messageFields?.password?.message}
            onChange={e => handleChangeFormLogin('password', e.target.value)}
          />
          <RemeberForgotContainer
            value={formLogin?.rememberMe}
            onChange={e => handleChangeFormLogin('rememberMe', e.target.checked)}
          />
          <Button className={classes.button}>
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
          {errorMessage && errorMessage}
        </form>
      </div>
    </div>
  );
};
