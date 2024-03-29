import React, { ReactNode, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import { ClickAwayListener, Icon } from '@/core/ui/components/atoms';
import { Menu, PopoverElements, Wrapper, WrapperIcon, Border } from './styles';

interface IPopover {
  displayElement?: ReactNode;
  withArrowIcon?: boolean;
  size?: number;
  label?: string;
}

export const Popover: React.FC<IPopover> = ({ displayElement, children, withArrowIcon, size, label }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const divRef = useRef<HTMLDivElement>(null);

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
    <Wrapper open={menuOpen} size={size} data-testid="popover">
      {label && label}
      <div style={{ width: '100%' }} ref={divRef}>
        <ClickAwayListener onClickAway={() => setMenuOpen(false)}>
          <Menu
            onClick={() => setMenuOpen(!menuOpen)}
            open={menuOpen}
            ref={setReferenceElement}
            withArrowIcon={withArrowIcon}
            data-testid="menu"
          >
            {displayElement}
            {withArrowIcon ? (
              <WrapperIcon open={menuOpen} data-testid="arrow-icon">
                <Icon icon="arrowDown" color="primary" shade="500" />
              </WrapperIcon>
            ) : null}
          </Menu>
          <PopoverElements
            size={divRef?.current?.offsetWidth}
            open={menuOpen}
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
          >
            <Border />
            {children}
          </PopoverElements>
        </ClickAwayListener>
      </div>
    </Wrapper>
  );
};
