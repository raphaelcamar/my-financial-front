import React from 'react';
import { Tooltip as MuiTooltip, TooltipProps } from '@mui/material';
import { useStyles } from './styles';

export const Tooltip: React.FC<TooltipProps> = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <Tooltip {...props} arrow open>
      {children}
    </Tooltip>
  );
};
