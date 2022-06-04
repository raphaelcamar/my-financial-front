import React, { InputHTMLAttributes, ReactNode } from 'react';
import { HelperText } from '@/core/presenters/components/atoms';
import { BaseInput, ContainerInput, Root } from './styles';

export interface IInputNew extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  label: string;
  helperText?: string;
  error?: boolean;
  actionEnd?: ReactNode;
  actionStart?: ReactNode;
}

export const InputNew: React.FC<IInputNew> = ({ label, helperText, error, actionEnd, actionStart, ...props }) => {
  const variant = error ? 'error' : 'primary';
  return (
    <Root>
      <label htmlFor={label}>{label}</label>
      <ContainerInput variant={variant} disabled={props.disabled}>
        {actionEnd && actionEnd}
        <BaseInput id={label} {...props} />
        {actionStart && actionStart}
      </ContainerInput>
      <HelperText variant={variant} disabled={props.disabled}>
        {helperText}
      </HelperText>
    </Root>
  );
};
