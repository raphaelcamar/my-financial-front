/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';
import { Sidebar, Header } from '@/core/presenters/components/organisms';
import { IconSidebarAction } from '@/core/presenters/components/molecules';
import { useStyles } from './styles';
import { SidebarData } from '@/core/presenters/utils';

export const Container: React.FC = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(true);
  const { pathname } = useLocation();

  const getTitle = () => {
    const currentPath = SidebarData.find(data => data.path === pathname);
    return currentPath?.title;
  };

  return (
    <div>
      <IconSidebarAction open={open} onClick={() => setOpen(!open)} />
      <Sidebar open={open} />
      <div
        className={clsx(classes.content, {
          [classes.contentShift]: !open,
        })}
      >
        <Header title={getTitle()} />
        {children}
      </div>
    </div>
  );
};
