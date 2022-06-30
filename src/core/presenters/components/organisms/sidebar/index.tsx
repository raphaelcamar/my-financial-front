import React from 'react';

import { Container, WrapperSidebar } from './styles';
import { HeaderSidebar } from '@/core/presenters/components/atoms';
import { SidebarOptions } from '@/core/presenters/components/organisms';
import { SidebarData } from '@/core/presenters/utils/sidebar-data';

interface ISidebarProps {
  open: boolean;
}

export const Sidebar: React.FC<ISidebarProps> = ({ open }) => (
  <WrapperSidebar open={open}>
    <Container open={open}>
      <HeaderSidebar open={open} />
      <SidebarOptions sidebarOpen={open} sidebarOptions={SidebarData} />
    </Container>
  </WrapperSidebar>
);
