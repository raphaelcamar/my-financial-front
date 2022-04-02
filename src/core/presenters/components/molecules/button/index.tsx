/* eslint-disable react/button-has-type */
import { useTheme } from '@mui/material';
import clsx from 'clsx';
import React, { ButtonHTMLAttributes } from 'react';
import { AvailableIcons } from '@/core/domain';
import { Icon } from '@/core/presenters/components/atoms';
import { useStyles } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'error' | 'outlined' | 'outlinedError' | 'fullfiled';
  size?: 'normal' | 'large';
  icon?: AvailableIcons;
}

export const Button: React.FC<IButtonProps> = ({
  size = 'normal',
  variant = 'fullfiled',
  children,
  icon,
  className,
  ...props
}) => {
  const classes = useStyles();
  const theme = useTheme();

  const getIconStyle = {
    outlined: theme.palette.primary.main,
    outlinedError: theme.palette.error.main,
    error: theme.palette.grey[100],
    fullfiled: theme.palette.grey[100],
  };
  return (
    <button className={clsx(classes.container, classes[variant], classes[size], className)} {...props}>
      <div className={classes.wrapper}>
        {icon && (
          <div className={classes.icon}>
            <Icon icon={icon} color={getIconStyle[variant]} />
          </div>
        )}
        {children}
      </div>
    </button>
  );
};
