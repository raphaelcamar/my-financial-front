import React from 'react';
import { useStyles } from './styles';
import { LoginForm } from '@/access-and-auth/presenters/components/organisms/login-form';
import { Figure } from '@/access-and-auth/presenters/components/atoms';

export const Login: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.form}>
        <LoginForm />
      </div>
      <div className={classes.figure}>
        <Figure type="circle" />
      </div>
    </div>
  );
};
