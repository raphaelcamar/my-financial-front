import { IconButtonProps, IconButton as MuiIconButton } from '@mui/material';
import React from 'react';
import { AvailableIcons } from '@/core/domain';
import { Icon } from '@/core/presenters/components/atoms';
import { useStyles } from './styles';

interface IIconButton extends IconButtonProps {
  icon: AvailableIcons;
}

export const IconButton: React.FC<IIconButton> = ({ icon, ...props }) => {
  const classes = useStyles();
  return (
    <MuiIconButton color="primary" {...props} className={classes.container}>
      <Icon icon={icon} />
    </MuiIconButton>
  );
};
