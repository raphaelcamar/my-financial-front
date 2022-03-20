import React from 'react';
import { Typography } from '@/core/presenters/components/atoms';
import { useStyles } from './styles';
import { IconButton } from '@/core/presenters/components/molecules';

export const Overview: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h4">Visão geral</Typography>
      {/* <IconButton icon="bell" size="large" />
      <IconButton icon="bellBall" size="large" /> */}
    </div>
  );
};
