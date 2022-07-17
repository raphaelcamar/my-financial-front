/* eslint-disable react/button-has-type */
import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonVariant, StyleType } from '@/core/domain/styles';
import { ColorProps, Shade } from '@/main/styled';
import { ButtonStyle } from './styles';
import { CircularProgress } from '../../atoms';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  styleType?: StyleType;
  shade?: Shade;
  loading?: boolean;
  colorLoading?: keyof ColorProps;
  sizeLoading?: number;
}

export const Button: React.FC<IButtonProps> = ({ loading, children, colorLoading, sizeLoading, ...props }) => (
  <ButtonStyle data-testid="styled-button" {...props}>
    {loading ? <CircularProgress color={colorLoading} size={sizeLoading} /> : children}
  </ButtonStyle>
);
