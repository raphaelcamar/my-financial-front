import React from 'react';
import clsx from 'clsx';

import { useStyles } from './styles';
import { HeaderSidebar, SidebarDrawer } from '@/core/presenters/components/atoms';
import { SidebarOptions } from '@/core/presenters/components/organisms';
import { SidebarData } from '@/core/presenters/utils/sidebar-data';

interface ISidebarProps {
  open: boolean;
}

export const Sidebar: React.FC<ISidebarProps> = ({ open }) => {
  const classes = useStyles();

  return (
    <SidebarDrawer open={open}>
      <div className={clsx(classes.container, !open && classes.closed)}>
        <HeaderSidebar open={open} />
        <div>
          <SidebarOptions open={open} sidebarOptions={SidebarData} />
        </div>
      </div>
    </SidebarDrawer>
  );
};