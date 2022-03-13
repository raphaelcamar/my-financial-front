import React from 'react';
import { ClickAwayListener as MuiClickAwayListener, ClickAwayListenerProps } from '@mui/material';

type Props = ClickAwayListenerProps;

export const ClickAwayListener: React.FC<Props> = ({ children, ...props }) => (
  <MuiClickAwayListener {...props}>{children}</MuiClickAwayListener>
);
