import React from 'react';
import { StyledCheckbox, StyledCheckboxProps, TextLink } from '@/core/presenters/components/atoms';
import { useStyles } from './styles';

interface IRememberForgotContainer extends StyledCheckboxProps {
  value?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

export const RemeberForgotContainer: React.FC<IRememberForgotContainer> = ({ onChange, value, ...props }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <StyledCheckbox label="Lembre-se de mim" value={value} onChange={e => onChange(e)} {...props} />
      <TextLink to="/recover">Esqueceu sua senha?</TextLink>
    </div>
  );
};
