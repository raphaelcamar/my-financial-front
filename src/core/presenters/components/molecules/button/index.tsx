/* eslint-disable react/button-has-type */
import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonVariant, ShadeButton, StyleType } from '@/core/domain/styles';
import { ButtonStyle } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  styleType?: StyleType;
  shade?: ShadeButton;
}

export const Button: React.FC<IButtonProps> = ({ children, ...props }) => (
  <ButtonStyle data-testid="styled-button" {...props}>
    {children}
  </ButtonStyle>
);
