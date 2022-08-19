import React, { useState } from 'react';
import { ClickAwayListener, Typography } from '@/core/ui/components/atoms';
import { Circle, Header, Pop, Title } from './styles';
import { IconButton, MenuItem } from '@/core/ui/components/molecules';

export const HeaderCard: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Header>
      <Title>
        <Circle />
        <Typography size="normal" weight={700}>
          Netflix
        </Typography>
      </Title>
      <ClickAwayListener style={{ position: 'relative' }} onClickAway={() => setOpen(false)}>
        <IconButton icon="moreOption" color="grey" shade="50" noBackground onClick={() => setOpen(!open)} />
        <Pop open={open}>
          <MenuItem text="Inativar" icon="closeEye" />
          <MenuItem text="Excluir" icon="trash" />
        </Pop>
      </ClickAwayListener>
    </Header>
  );
};
