import React from 'react';
import { useStyles } from './styles';
import { LoginForm } from '../../components/organisms/login-form';
import { Figure } from '../../components/molecules/figure';

export const LoginNew: React.FC = () => {
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
