import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar, Header } from '@/core/presenters/components/organisms';
import { IconSidebarAction } from '@/core/presenters/components/molecules';
import { Content } from './styles';
import { SidebarData } from '@/core/presenters/utils';
import { TransactionProvider } from '@/transaction/presenters/contexts';

export const Container: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  const { pathname } = useLocation();

  const getTitle = () => {
    const currentPath = SidebarData.find(data => data.path === pathname);
    return currentPath?.title;
  };

  return (
    <TransactionProvider>
      <IconSidebarAction open={open} onClick={() => setOpen(!open)} />
      <Sidebar open={open} />
      <Content open={open}>
        <Header title={getTitle()} />
        <Outlet />
      </Content>
    </TransactionProvider>
  );
};
