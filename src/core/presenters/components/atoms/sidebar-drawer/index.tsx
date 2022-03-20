import clsx from 'clsx';
import React from 'react';
import { useStyles } from './styles';

interface ISidebarDrawerProps {
  open: boolean;
}

export const SidebarDrawer: React.FC<ISidebarDrawerProps> = ({ children, open }) => {
  const classes = useStyles();
  return <div className={clsx(classes.container, open && classes.open)}>{children}</div>;
};
