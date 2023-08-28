import React, { ReactElement, useState } from 'react';
import { usePopper } from 'react-popper';
import { ClickAwayListener, Icon } from '../../atoms';
import { IMenuItem, MenuItem } from '../../molecules';
import { Popup, WrapperIcon } from './styles';
import { randomId } from '@/core/utils';

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
      <WrapperIcon onClick={() => setOpen(!open)} ref={setReferenceElement}>
        <Icon icon="moreOption" color="grey" shade="500" size={18} />
      </WrapperIcon>
      {open ? (
        <Popup ref={setPopperElement} open={open} style={styles.popper} {...attributes.popper}>
          {items?.map(menuItemProps => (
            <MenuItem {...menuItemProps} key={randomId()} onClick={() => handleClick(menuItemProps.onClick)} />
          ))}
        </Popup>
      ) : (
        <></>
      )}
    </ClickAwayListener>
  );
};
