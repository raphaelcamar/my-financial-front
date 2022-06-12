/* eslint-disable react/button-has-type */
import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonVariant, StyleType } from '@/core/domain/styles';
import { Shade } from '@/main/styled';
import { ButtonStyle } from './styles';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  styleType?: StyleType;
  shade?: Shade;
}

export const Button: React.FC<IButtonProps> = ({ children, ...props }) => (
  <ButtonStyle data-testid="styled-button" {...props}>
    {children}
  </ButtonStyle>
);
