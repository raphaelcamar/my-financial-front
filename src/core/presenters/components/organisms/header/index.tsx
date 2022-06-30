import React from 'react';
import { Icon, Typography } from '@/core/presenters/components/atoms';
import { ContainerHeader, WrapperHamburguerBar } from './styles';

interface IHheaderProps {
  title: string;
  setOpenDrawer?: (open?: boolean) => void;
  openDrawer?: boolean;
}

export const Header: React.FC<IHheaderProps> = ({ title, openDrawer, setOpenDrawer }) => (
  <ContainerHeader>
    <WrapperHamburguerBar onClick={() => setOpenDrawer(true)}>
      <Icon color="primary" shade="500" icon={openDrawer ? 'openDrawerMobile' : 'closeDrawerMobile'} />
    </WrapperHamburguerBar>
    <Typography type="h1" size="xxxlarge">
      {title}
    </Typography>
  </ContainerHeader>
);
