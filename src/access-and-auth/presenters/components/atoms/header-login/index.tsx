import { useTheme } from '@mui/material';
import React from 'react';
import { Icon, Typography } from '@/core/presenters/components/atoms';
import { useStyles } from './styles';

export const HeaderLogin: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.headerLogin}>
      <Icon icon="logo" color={theme.palette.primary.main} />
      <Typography variant="body1">My financial</Typography>
    </div>
  );
};