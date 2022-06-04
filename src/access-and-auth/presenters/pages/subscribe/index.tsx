import React from 'react';
import { useStyles } from './styles';
import { SubscribeForm } from '@/access-and-auth/presenters/components/organisms';
import { Figure } from '@/access-and-auth/presenters/components/atoms';

export const Subscribe: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{ width: '60%' }}>
        <div className={classes.figure}>
          <Figure type="square" />
        </div>
      </div>
      <div className={classes.form}>
        <SubscribeForm />
      </div>
    </div>
  );
};
