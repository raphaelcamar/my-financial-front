import React, { ReactElement, useState } from 'react';
import { usePopper } from 'react-popper';
import { ClickAwayListener } from '../../atoms';
import { IMenuItem, IconButton, MenuItem } from '../../molecules';
import { Popup } from './styles';

type IMoreOptions = {
  items: IMenuItem[];
  closeOnSelectIitem?: boolean;
};

export const MoreOptions = ({ items, closeOnSelectIitem }: IMoreOptions): ReactElement => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [open, setOpen] = useState<boolean>(false);

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

  const handleClick = (clickEvent: () => void) => {
    clickEvent();
    if (closeOnSelectIitem) {
      setOpen(!open);
    }
  };

  return (
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
        <Popup ref={setPopperElement} open={open} style={styles.popper} {...attributes.popper}>
          {items?.map(menuItemProps => (
            <MenuItem {...menuItemProps} onClick={() => handleClick(menuItemProps.onClick)} />
          ))}
        </Popup>
      ) : (
        <></>
      )}
    </ClickAwayListener>
  );
};
