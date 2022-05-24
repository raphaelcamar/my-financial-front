import React from 'react';
import { StyledCheckbox, TextLink } from '@/core/presenters/components/atoms';
import { useStyles } from './styles';

interface IRememberForgotContainer {
  value: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RemeberForgotContainer: React.FC<IRememberForgotContainer> = ({ onChange, value }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <StyledCheckbox label="Lembre-se de mim" value={value} onChange={e => onChange(e)} />
      <TextLink to="/recover">Esqueceu sua senha?</TextLink>
    </div>
  );
};
