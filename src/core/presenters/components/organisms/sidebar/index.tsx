import React from 'react';

import { Container } from './styles';
import { HeaderSidebar, SidebarDrawer } from '@/core/presenters/components/atoms';
import { SidebarOptions } from '@/core/presenters/components/organisms';
import { SidebarData } from '@/core/presenters/utils/sidebar-data';

interface ISidebarProps {
  open: boolean;
}

export const Sidebar: React.FC<ISidebarProps> = ({ open }) => (
  <SidebarDrawer open={open}>
    <Container open={open}>
      <HeaderSidebar open={open} />
      <SidebarOptions open={open} sidebarOptions={SidebarData} />
    </Container>
  </SidebarDrawer>
);
