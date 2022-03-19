import React from 'react';
import { Sidebar } from '@/core/presenters/components/organisms';
import { useStyles } from './styles';

export const Container: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Sidebar />
      <div className={classes.container}>teste</div>
    </>
  );
};
