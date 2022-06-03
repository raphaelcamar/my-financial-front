import React, { useState } from 'react';
import { useTheme } from '@mui/material';
import { HeaderSubscribe, RedirectLink } from '@/access-and-auth/presenters/components/atoms';
import { useStyles } from './styles';
import { Button, Input } from '@/core/presenters/components/molecules';
import { CircularProgress, Icon } from '@/core/presenters/components/atoms';
import { UseFormValidation } from '@/core/presenters/hooks';
import { User } from '@/access-and-auth/domain';

export const SubscribeForm: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [loading, setLoading] = useState<boolean>(false);
  // const { messageFields, onChange, isValid, onSubmit } = UseFormValidation<User.Subscribe>(subscribeSchemaValidator());

  return (
    <div className={classes.container}>
      <HeaderSubscribe />
      <form className={classes.form}>
        <Input
          icon="person"
          label="Nome"
          name="name"
          // onChange={onChange}
          // validator={!!messageFields?.email?.message}
          // messageValidator={messageFields?.email?.message}
        />

        <Input
          icon="person"
          label="Sobrenome"
          name="lastname"
          // onChange={onChange}
          // validator={!!messageFields?.email?.message}
          // messageValidator={messageFields?.email?.message}
        />

        <Input
          icon="mail"
          label="Email"
          name="email"
          // onChange={onChange}
          // validator={!!messageFields?.email?.message}
          // messageValidator={messageFields?.email?.message}
        />

        <Input
          icon="key"
          label="Senha"
          name="password"
          // onChange={onChange}
          // validator={!!messageFields?.email?.message}
          // messageValidator={messageFields?.email?.message}
        />

        <Button className={classes.button} disabled={false}>
          {loading ? <CircularProgress size={25} color="inherit" /> : 'Login'}
        </Button>
      </form>

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
        Inscreva-se com o google
      </Button>
      <RedirectLink question="Já possui conta?" link="Faça login" to="/login" />
    </div>
  );
};
