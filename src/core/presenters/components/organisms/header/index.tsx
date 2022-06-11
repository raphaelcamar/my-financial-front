import React from 'react';
import { Typography } from '@/core/presenters/components/atoms';
import { useStyles } from './styles';

interface IHheaderProps {
  title: string;
}

export const Header: React.FC<IHheaderProps> = ({ title }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography type="h1" size="xxxlarge">
        {title}
      </Typography>
    </div>
  );
};
