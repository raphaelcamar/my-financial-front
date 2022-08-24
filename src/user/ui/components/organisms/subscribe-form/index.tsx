import React from 'react';
import { LogoName, RedirectLink, AuthTitle, WrapperForm } from '@/user/ui/components/atoms';
import { Container, Center, Form } from './styles';
import { Button, Input } from '@/core/ui/components/molecules';
import { Icon } from '@/core/ui/components/atoms';

import { useSubscribeForm } from './hook';

export const SubscribeForm: React.FC = () => {
  const { errors, handleSubmit, handleSubmitForm, loading, register } = useSubscribeForm();

  return (
    <WrapperForm>
      <Container>
        <LogoName />
        <AuthTitle title="Bem vindo!" description="Cadastre-se e comece a ter uma vida mais organizada" />
        <Form onSubmit={handleSubmit(handleSubmitForm)}>
          <Input
            actionStart={<Icon icon="person" />}
            label="Nome"
            name="name"
            {...register('name')}
            error={!!errors?.name?.message}
            helperText={errors?.name?.message}
          />

          <Input
            actionStart={<Icon icon="person" />}
            label="Sobrenome"
            name="lastname"
            {...register('lastname')}
            error={!!errors?.lastname?.message}
            helperText={errors?.lastname?.message}
          />

          <Input
            actionStart={<Icon icon="mail" />}
            label="Email"
            name="email"
            {...register('email')}
            error={!!errors?.email?.message}
            helperText={errors?.email?.message}
          />

          <Input
            actionStart={<Icon icon="key" />}
            label="Senha"
            name="password"
            type="password"
            {...register('password')}
            error={!!errors?.password?.message}
            helperText={errors?.password?.message}
          />

          <Button variant="primary" styleType="fullfiled" shade={500} loading={loading}>
            Login
          </Button>
        </Form>

        {/* <GoogleButton>Inscreva-se com o google</GoogleButton> */}
        <Center>
          <RedirectLink question="Já possui conta?" link="Faça login" to="/login" />
        </Center>
      </Container>
    </WrapperForm>
  );
};
