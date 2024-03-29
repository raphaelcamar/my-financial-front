import React from 'react';
import { Icon, Typography } from '@/core/ui/components/atoms';
import { ContainerHeader, ContainerHeaderOptions, WrapperHamburguerBar } from './styles';
import { MenuProfilePopover, MenuIndicators } from '@/core/ui/components/organisms';

interface IHheaderProps {
  title: string;
  setOpenDrawer?: (open?: boolean) => void;
  openDrawer?: boolean;
}

export const Header: React.FC<IHheaderProps> = ({ title, openDrawer, setOpenDrawer }) => (
  <ContainerHeader data-testid="header">
    <WrapperHamburguerBar onClick={() => setOpenDrawer(true)}>
      <Icon color="primary" shade="500" icon={openDrawer ? 'openDrawerMobile' : 'closeDrawerMobile'} />
    </WrapperHamburguerBar>
    <Typography type="h1" size="xxxlarge">
      {title}
    </Typography>
    <ContainerHeaderOptions>
      <MenuIndicators />
      <MenuProfilePopover />
    </ContainerHeaderOptions>
  </ContainerHeader>
);
