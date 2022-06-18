/* eslint-disable react/button-has-type */
import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonVariant, StyleType } from '@/core/domain/styles';
import { Shade } from '@/main/styled';
import { ButtonStyle } from './styles';
import { CircularProgress } from '../../atoms';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  styleType?: StyleType;
  shade?: Shade;
  loading?: boolean;
}

export const Button: React.FC<IButtonProps> = ({ loading, children, ...props }) => (
  <ButtonStyle data-testid="styled-button" {...props}>
    {loading ? <CircularProgress size={25} color="inherit" /> : children}
  </ButtonStyle>
);
