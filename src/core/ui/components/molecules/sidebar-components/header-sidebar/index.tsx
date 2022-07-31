import React, { useEffect, useState } from 'react';
import { Icon, Typography } from '@/core/ui/components/atoms';
import { Header } from './styles';

interface IHeaderSidebar {
  open: boolean;
}

export const HeaderSidebar: React.FC<IHeaderSidebar> = ({ open }) => {
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
      <Icon icon="logo" color="primary" shade="main" />
      {openTitle && (
        <Typography type="h6" size="xxlarge" color="primary">
          My Financial
        </Typography>
      )}
    </Header>
  );
};
