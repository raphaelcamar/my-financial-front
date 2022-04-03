import React from 'react';
import { Drawer as MuiDrawer, DrawerProps } from '@mui/material';
import clsx from 'clsx';
import { useStyles } from './styles';
import { Typography } from '@/core/presenters/components/atoms';
import { Button, IconButton } from '@/core/presenters/components/molecules';

interface IDrawer extends DrawerProps {
  text?: string;
  onClose: () => void;
}

export const Drawer: React.FC<IDrawer> = ({ children, text, onClose, ...props }) => {
  const classes = useStyles();
  return (
    <MuiDrawer {...props} className={classes.container}>
      <div className={clsx(classes.drawerHeader, text && classes.spacing)}>
        {text && <Typography variant="body1">{text}</Typography>}
        <IconButton icon="close" type="button" onClick={onClose} size="large" />
      </div>
      <div>{children}</div>
    </MuiDrawer>
  );
};
