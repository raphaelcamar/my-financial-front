import React from 'react';
import { Typography } from '@/core/presenters/components/atoms';
import { useStyles } from './styles';

export const HeaderSubscribe: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h1">Bem vindo!</Typography>
      <Typography variant="body1">Cadastre-se e comece a ter uma vida mais organizada</Typography>
    </div>
  );
};
