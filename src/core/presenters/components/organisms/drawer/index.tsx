import React from 'react';
import { Container, DrawerWrapper, DrawerHeader } from './styles';
import { Typography } from '@/core/presenters/components/atoms';
import { IconButton } from '@/core/presenters/components/molecules';

interface IDrawer {
  open: boolean;
  text?: string;
  onClose: () => void;
}

export const Drawer: React.FC<IDrawer> = ({ children, text, onClose, open }) => (
  <Container open={open}>
    <DrawerWrapper open={open}>
      <DrawerHeader>
        {text && (
          <Typography weight={500} size="large">
            {text}
          </Typography>
        )}
        <IconButton
          icon="close"
          color="primary"
          shade="500"
          iconProps={{ color: 'grey', shade: '50' }}
          onClick={onClose}
        />
      </DrawerHeader>
      <div>{children}</div>
    </DrawerWrapper>
  </Container>
);
