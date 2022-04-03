import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material';
import clsx from 'clsx';
import { Icon, Typography } from '@/core/presenters/components/atoms';
import { useStyles } from './styles';

interface IHeaderSidebar {
  open: boolean;
}

export const HeaderSidebar: React.FC<IHeaderSidebar> = ({ open }) => {
  const theme = useTheme();
  const classes = useStyles();
  const [openTitle, setOpenTitle] = useState<boolean>(open);

  useEffect(() => {
    let timeOut;
    if (!open) {
      setOpenTitle(open);
    } else {
      timeOut = setTimeout(() => {
        setOpenTitle(open);
      }, 301);
    }
    return () => clearTimeout(timeOut);
  }, [open]);

  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <Icon icon="logoSmall" color={theme.palette.grey[50]} />
      </div>
      {openTitle && <Typography variant="h6">My Financial</Typography>}
    </div>
  );
};
