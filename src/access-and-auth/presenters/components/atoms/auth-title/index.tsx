import React from 'react';
import { Typography } from '@/core/presenters/components/atoms';
import { useStyles } from './styles';

interface IAuthTitle {
  title: string;
  description: string;
}

export const AuthTitle: React.FC<IAuthTitle> = ({ title, description }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapperHeader}>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="body1">{description}</Typography>
    </div>
  );
};
