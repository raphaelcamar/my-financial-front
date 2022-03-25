import React from 'react';
import { Drawer as MuiDrawer, DrawerProps } from '@mui/material';
import clsx from 'clsx';
import { useStyles } from './styles';
import { Typography } from '@/core/presenters/components/atoms';
import { Button, IconButton } from '@/core/presenters/components/molecules';

interface IDrawer extends DrawerProps {
  text?: string;
  onClose: () => void;
  onSubmit?: () => void;
}

export const Drawer: React.FC<IDrawer> = ({ children, text, onClose, onSubmit, ...props }) => {
  const classes = useStyles();
  return (
    <MuiDrawer {...props} className={classes.container}>
      <div className={clsx(classes.drawerHeader, text && classes.spacing)}>
        {text && <Typography variant="body1">{text}</Typography>}
        <IconButton icon="close" onClick={onClose} size="large" />
      </div>
      <div>{children}</div>
      <div className={classes.buttons}>
        <div>
          <Button variant="outlined" size="large" onClick={onClose}>
            Cancelar
          </Button>
        </div>
        <div>
          <Button icon="add" variant="fullfiled" size="large" onClick={onSubmit}>
            Adicionar
          </Button>
        </div>
      </div>
    </MuiDrawer>
  );
};
