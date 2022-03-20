import React from 'react';
import { useTheme } from '@mui/material';
import { Icon, Typography } from '@/core/presenters/components/atoms';
import { useStyles } from './styles';

interface IHeaderSidebar {
  open: boolean;
}

export const HeaderSidebar: React.FC<IHeaderSidebar> = ({ open }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <Icon icon="logoSmall" color={theme.palette.grey[50]} />
      </div>
      {open && <Typography variant="h6">My Financial</Typography>}
    </div>
  );
};
