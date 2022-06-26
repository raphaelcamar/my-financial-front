import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material';
import { Icon, Typography } from '@/core/presenters/components/atoms';
import { Header } from './styles';

interface IHeaderSidebar {
  open: boolean;
}

export const HeaderSidebar: React.FC<IHeaderSidebar> = ({ open }) => {
  const theme = useTheme();
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
    <Header open={open}>
      <Icon icon="logo" color={theme.palette.primary.main} />
      {openTitle && (
        <Typography type="h6" size="xxlarge" color="primary">
          My Financial
        </Typography>
      )}
    </Header>
  );
};
