import React, { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import { HelperText, InputBase } from '@/core/presenters/components/atoms';
import { ContainerInput, Root } from './styles';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  label: string;
  helperText?: string;
  error?: boolean;
  actionEnd?: ReactNode;
  actionStart?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, IInput>(
  ({ label, helperText, error, actionEnd, actionStart, ...props }, ref) => {
    const variant = error ? 'error' : 'primary';
    return (
      <Root>
        <label htmlFor={label}>{label}</label>
        <ContainerInput data-testid="input-root" variant={variant} disabled={props.disabled}>
          {actionStart && actionStart}
          <InputBase id={label} {...props} ref={ref} />
          {actionEnd && actionEnd}
        </ContainerInput>
        <HelperText variant={variant} disabled={props.disabled}>
          {helperText || ''}
        </HelperText>
      </Root>
    );
  }
);
