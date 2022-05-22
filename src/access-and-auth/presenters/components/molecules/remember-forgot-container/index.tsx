import React from 'react';
import { StyledCheckbox, Typography } from '@/core/presenters/components/atoms';
import { useStyles } from './styles';

export const RemeberForgotContainer: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <StyledCheckbox label="Lembre-se de mim" />
      <Typography variant="body2">Esqueceu sua senha?</Typography>
    </div>
  );
};
