import React from 'react';
import { useStyles } from './styles';
import { Metrics } from '@/transaction/presenters/components/organisms';

export const TransactionsPage: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Metrics />
    </>
  );
};
