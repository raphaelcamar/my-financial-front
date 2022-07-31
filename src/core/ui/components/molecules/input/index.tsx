import React, { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import { HelperText, InputBase } from '@/core/ui/components/atoms';
import { ContainerInput, Root } from './styles';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  label: string;
  helperText?: string;
  error?: boolean;
  actionEnd?: ReactNode;
  actionStart?: ReactNode;
  noBottomRadius?: boolean;
}

export const Input = forwardRef<HTMLInputElement, IInput>(
  ({ label, helperText, error, actionEnd, actionStart, noBottomRadius, ...props }, ref) => {
    const variant = error ? 'error' : 'primary';
    return (
      <Root>
        <label htmlFor={label}>{label}</label>
        <ContainerInput
          noBottomRadius={noBottomRadius}
          data-testid="input-root"
          variant={variant}
          disabled={props.disabled}
        >
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
