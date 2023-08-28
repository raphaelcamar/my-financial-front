import React, { ReactElement, ReactNode, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import { TooltipItem } from './styles';
import { Typography } from '../typography';

interface ITooltip {
  content: string;
  children: ReactNode;
}

export const Tooltip = ({ children, content }: ITooltip): ReactElement => {
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

  let timeout = null;

  const handleMenuOpen = () => {
    timeout = setTimeout(() => {
      setMenuOpen(true);
    }, 200);
  };

  const handleMenuClose = () => {
    clearTimeout(timeout);
    setMenuOpen(false);
  };

  return (
    <div ref={divRef}>
      <div ref={setReferenceElement} onMouseEnter={() => handleMenuOpen()} onMouseLeave={() => handleMenuClose()}>
        {children}
      </div>
      {menuOpen ? (
        <TooltipItem {...attributes.popper} ref={setPopperElement} style={styles.popper}>
          <Typography color="grey" shade={500}>
            {content}
          </Typography>
        </TooltipItem>
      ) : (
        <></>
      )}
    </div>
  );
};
