import React from 'react';
import {
  Button as MuiButton,
  ButtonProps,
  ButtonBaseProps,
} from '@mui/material';
import clsx from 'clsx';

import { useStyles } from './styles';

export type ColorProps =
  | 'error'
  | 'grey'
  | 'info'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning';

export type ShadeProps =
  | 'contrastText'
  | 'soft'
  | 'light'
  | 'highlight'
  | 'main'
  | 'dark'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800';

export type VariantProps = 'contained' | 'outlined' | 'text';

type Props = Omit<ButtonProps, 'color' | 'size' | 'variant'> &
  ButtonBaseProps &
  React.HTMLAttributes<HTMLDivElement> & {
    color?: ColorProps;
    shade?: ShadeProps;
    variant?: VariantProps;
    size?: 'small' | 'medium' | 'large' | 'default';
    withColorLight?: boolean;
    withoutBackground?: boolean;
  };

export const Button: React.FC<Props> = ({
  color = 'primary',
  shade = 'highlight',
  variant = 'contained',
  size = 'small',
  children,
  className,
  withColorLight = false,
  withoutBackground,
  ...props
}) => {
  const classes = useStyles();

  return (
    <MuiButton
      {...props}
      variant={variant}
      className={clsx(classes.container, className)}
    >
      {children}
    </MuiButton>
  );
};
