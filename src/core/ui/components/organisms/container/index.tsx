import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar, Header, Drawer, SidebarOptions } from '@/core/ui/components/organisms';
import { SidebarAction } from '@/core/ui/components/molecules';
import { Content, WrapperSidebar, WrapperDrawer, ContentDrawer, HeaderDrawer, IconWrapper } from './styles';
import { SidebarData } from '@/core/utils';
import { Icon, Typography } from '../../atoms';

export const Container: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const { pathname } = useLocation();

  const getTitle = () => {
    const currentPath = SidebarData.find(data => data.path === pathname);
    return currentPath?.title;
  };

  return (
    <>
      <WrapperSidebar>
        <SidebarAction open={open} onClick={() => setOpen(!open)} />
        <Sidebar open={open} />
      </WrapperSidebar>
      <WrapperDrawer>
        <Drawer widthSize="70%" noRadius fullWidth side="left" open={openDrawer}>
          <ContentDrawer>
            <HeaderDrawer>
              <IconWrapper onClick={() => setOpenDrawer(false)}>
                <Icon icon="openDrawerMobile" color="primary" shade="500" />
              </IconWrapper>
              <Typography type="h6" size="xxlarge" color="primary">
                My financial
              </Typography>
            </HeaderDrawer>
            <SidebarOptions sidebarOpen sidebarOptions={SidebarData} />
          </ContentDrawer>
        </Drawer>
      </WrapperDrawer>
      <Content open={open}>
        <Header setOpenDrawer={setOpenDrawer} openDrawer={openDrawer} title={getTitle()} />
        <Outlet />
      </Content>
    </>
  );
};
