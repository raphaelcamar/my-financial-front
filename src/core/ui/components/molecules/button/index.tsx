/* eslint-disable react/button-has-type */
import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonVariant, StyleType } from '@/core/domain/styles';
import { ColorProps, Shade } from '@/main/styled';
import { ButtonStyle } from './styles';
import { CircularLoader } from '@/core/ui/components/atoms';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  styleType?: StyleType;
  shade?: Shade;
  loading?: boolean;
  colorLoading?: keyof ColorProps;
  sizeLoading?: number;
  shadeLoading?: Shade;
}

export const Button: React.FC<IButtonProps> = ({
  loading,
  children,
  colorLoading,
  sizeLoading,
  shadeLoading,
  ...props
}) => (
  <ButtonStyle data-testid="styled-button" {...props}>
    {loading ? <CircularLoader color={colorLoading} size={sizeLoading} shade={shadeLoading} /> : children}
  </ButtonStyle>
);
