import React from 'react';
import { Typography } from '@/core/presenters/components/atoms';
import { useStyles } from './styles';

export const HeaderSubscribe: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography type="h1" size="xxxlarge" weight={700}>
        Bem vindo!
      </Typography>
      <Typography type="p" color="grey" size="normal">
        Cadastre-se e comece a ter uma vida mais organizada
      </Typography>
    </div>
  );
};
