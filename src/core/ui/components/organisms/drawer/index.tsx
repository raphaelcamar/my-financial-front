import React, { ReactNode } from 'react';
import { Container, DrawerWrapper } from './styles';

interface IDrawer {
  open: boolean;
  side?: 'left' | 'right';
  actionTop?: ReactNode;
  fullWidth?: boolean;
  noRadius?: boolean;
  widthSize?: string;
}

export const Drawer: React.FC<IDrawer> = ({
  children,
  fullWidth,
  open,
  side = 'right',
  actionTop,
  noRadius,
  widthSize = '550px',
}) => (
  <Container open={open}>
    <DrawerWrapper widthSize={widthSize} noRadius={noRadius} open={open} side={side} fullWidth={fullWidth}>
      {actionTop}
      <div>{children}</div>
    </DrawerWrapper>
  </Container>
);
