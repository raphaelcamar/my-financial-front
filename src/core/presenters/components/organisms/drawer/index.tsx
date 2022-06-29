import React from 'react';
import { Drawer as MuiDrawer, DrawerProps } from '@mui/material';
import clsx from 'clsx';
import { useStyles } from './styles';
import { Typography } from '@/core/presenters/components/atoms';
import { IconButton } from '@/core/presenters/components/molecules';

interface IDrawer extends DrawerProps {
  text?: string;
  onClose: () => void;
}

export const Drawer: React.FC<IDrawer> = ({ children, text, onClose, ...props }) => {
  const classes = useStyles();
  return (
    <MuiDrawer {...props} className={classes.container}>
      <div className={clsx(classes.drawerHeader, text && classes.spacing)}>
        {text && <Typography>{text}</Typography>}
        <IconButton
          icon="close"
          color="primary"
          shade="500"
          iconProps={{ color: 'grey', shade: '50' }}
          onClick={onClose}
        />
      </div>
      <div>{children}</div>
    </MuiDrawer>
  );
};
