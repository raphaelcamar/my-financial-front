import React from 'react';
import { Input, Button } from '@/core/presenters/components/molecules';

import { AuthTitle, LogoName, RedirectLink, WrapperForm } from '@/access-and-auth/ui/components/atoms';
import { Container, Wrapper, Center } from './styles';
import { Icon, TextLink } from '@/core/presenters/components/atoms';
import { useLoginForm } from '@/access-and-auth/presenters/hooks';

export const LoginForm: React.FC = () => {
  const { errors, loading, handleSubmit, onSubmit, register } = useLoginForm();

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
