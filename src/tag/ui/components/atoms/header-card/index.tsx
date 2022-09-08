import React, { useState } from 'react';
import { usePopper } from 'react-popper';
import { ClickAwayListener, Typography } from '@/core/ui/components/atoms';
import { Circle, Header, Pop, Title } from './styles';
import { IconButton, MenuItem } from '@/core/ui/components/molecules';
import { ColorProps } from '@/main/styled';

interface IHeaderCard {
  color: keyof ColorProps;
  title: string;
  onEdit: () => void;
  onDelete: () => void;
}

export const HeaderCard: React.FC<IHeaderCard> = ({ color, onDelete, onEdit, title }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-start',
    modifiers: [
      {
        name: 'preventOverflow',
        options: {
          mainAxis: false,
        },
      },
    ],
  });

  return (
    <Header>
      <Title>
        <Circle color={color} />
        <Typography size="normal" weight={700}>
          {title}
        </Typography>
      </Title>
      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <IconButton
          icon="moreOption"
          color="grey"
          shade="50"
          noBackground
          onClick={() => setOpen(!open)}
          ref={setReferenceElement}
        />
        {open ? (
          <Pop ref={setPopperElement} open={open} style={styles.popper} {...attributes.popper}>
            <MenuItem text="Editar" icon="pen" />
            <MenuItem text="Excluir" icon="trash" />
          </Pop>
        ) : (
          <></>
        )}
      </ClickAwayListener>
    </Header>
  );
};
