import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useStyles } from './styles';
import { LoginForm, SubscribeForm } from '@/access-and-auth/presenters/components/organisms';
import { Figure } from '@/access-and-auth/presenters/components/atoms';

export const LoginAnm: React.FC = () => {
  const classes = useStyles();
  const [transform, setTransform] = useState<boolean>(false);

  return (
    <div className={clsx(classes.anotherRoot, transform ? classes.transform : classes.transformOff)} id="container">
      <LoginForm />

      <div className={classes.wrapperFigure}>
        <div className={clsx(classes.figure, transform && classes.square)} />
        <div className={classes.blurred} />
      </div>
      <SubscribeForm />

      {/* <div className={classes.form}>
      </div>
      <div className={classes.figure}>
      </div> */}
    </div>
  );
};
