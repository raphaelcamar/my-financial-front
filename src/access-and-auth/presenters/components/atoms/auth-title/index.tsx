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
      <Typography type="h1" size="xxxlarge" weight={700}>
        {title}
      </Typography>
      <Typography type="p" color="grey" size="normal">
        {description}
      </Typography>
    </div>
  );
};
