import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router';
import { Input, Button } from '@/core/presenters/components/molecules';

import {
  AuthTitle,
  LogoName,
  RedirectLink,
  WrapperForm,
  GoogleButton,
} from '@/access-and-auth/presenters/components/atoms';
import { Container, Wrapper, Center } from './styles';
import { Icon, TextLink } from '@/core/presenters/components/atoms';
import { User } from '@/access-and-auth/domain';
import { useAccessAndAuthContext } from '@/access-and-auth/presenters/contexts';
import { UserLoginValidatorSchema } from '@/access-and-auth/data';

export const LoginForm: React.FC = () => {
  const { userAuth } = useAccessAndAuthContext();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User.Login>({ resolver: yupResolver(UserLoginValidatorSchema) });

  const [loading, setLoading] = useState<boolean>(false);
  const onSubmit = async (e: User.Login): Promise<void> => {
    try {
      setLoading(true);
      await userAuth(e);
      navigate('/transacoes');
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
        <Container onSubmit={handleSubmit(onSubmit)}>
          <AuthTitle title="Bem vindo de volta" description="Seja bem vindo de volta! Entre com suas credenciais." />
          <Input
            actionStart={<Icon icon="person" />}
            label="Email"
            name="email"
            {...register('email')}
            error={!!errors?.email?.message}
            helperText={errors?.email?.message}
          />
          <Input
            actionStart={<Icon icon="key" />}
            label="Senha"
            type="password"
            name="password"
            {...register('password')}
            error={!!errors?.password?.message}
            helperText={errors?.password?.message}
          />
          <TextLink to="/recuperar-senha">Esqueceu sua senha?</TextLink>

          <Button loading={loading}>Login</Button>
          {/* <GoogleButton>Entre com o Google</GoogleButton> */}
          <Center>
            <RedirectLink question="Não possui conta?" link="Inscreva-se!" to="/cadastro" />
          </Center>
        </Container>
      </Wrapper>
    </WrapperForm>
  );
};
