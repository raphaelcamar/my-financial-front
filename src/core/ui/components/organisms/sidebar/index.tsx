import React from 'react';

import { Container, WrapperSidebar } from './styles';
import { HeaderSidebar } from '@/core/ui/components/molecules';
import { SidebarOptions } from '@/core/ui/components/organisms';
import { SidebarData } from '@/core/utils';

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
