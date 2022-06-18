import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { Input, Button } from '@/core/presenters/components/molecules';

import {
  AuthTitle,
  LogoName,
  RedirectLink,
  WrapperForm,
  GoogleButton,
} from '@/access-and-auth/presenters/components/atoms';
import { Container, Wrapper, Center } from './styles';
import { CircularProgress, Icon, TextLink } from '@/core/presenters/components/atoms';
import { User } from '@/access-and-auth/domain';
import { useAccessAndAuthContext } from '@/access-and-auth/presenters/contexts';
import { UseFormValidation } from '@/core/presenters/hooks';
import { loginSchemaValidator } from '@/access-and-auth/data';

export const LoginForm: React.FC = () => {
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
    <WrapperForm>
      <LogoName />
      <Wrapper>
        <Container onSubmit={e => onSubmit(e, handleSubmit)}>
          <AuthTitle title="Bem vindo de volta" description="Seja bem vindo de volta! Entre com suas credenciais." />
          <Input
            actionStart={<Icon icon="person" />}
            label="Email"
            name="email"
            onChange={onChange}
            error={!!messageFields?.email?.message}
            helperText={messageFields?.email?.message}
          />
          <Input
            actionStart={<Icon icon="key" />}
            label="Senha"
            type="password"
            name="password"
            error={!!messageFields?.password?.message}
            helperText={messageFields?.password?.message}
            onChange={onChange}
          />
          <TextLink to="/recuperar-senha">Esqueceu sua senha?</TextLink>

          <Button disabled={!isValid} loading={loading}>
            Login
          </Button>
          <GoogleButton>Entre com o Google</GoogleButton>
          <Center>
            <RedirectLink question="Não possui conta?" link="Inscreva-se!" to="/cadastro" />
          </Center>
        </Container>
      </Wrapper>
    </WrapperForm>
  );
};
