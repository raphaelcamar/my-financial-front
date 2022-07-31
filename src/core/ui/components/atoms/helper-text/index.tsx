import React, { ReactNode } from 'react';
import { Variants } from '@/core/domain/styles';
import { Root } from './styles';

interface IHelperText {
  disabled?: boolean;
  variant?: Variants;
  children: ReactNode;
}

export const HelperText: React.FC<IHelperText> = ({ disabled, variant, children }) => (
  <Root data-testid="helper-text" variant={variant} disabled={disabled}>
    {children}
  </Root>
);
