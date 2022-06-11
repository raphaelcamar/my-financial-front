import { useTheme } from '@mui/material';
import React from 'react';
import { Icon, Typography } from '@/core/presenters/components/atoms';
import { useStyles } from './styles';

export const LogoName: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.headerLogin}>
      <Icon icon="logo" color={theme.palette.primary.main} />
      <Typography type="p" color="primary" size="xxlarge">
        My financial
      </Typography>
    </div>
  );
};
