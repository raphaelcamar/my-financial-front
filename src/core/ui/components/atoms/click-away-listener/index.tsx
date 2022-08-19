import React, { useRef, useEffect } from 'react';

interface IClickAwatListener {
  onClickAway: () => void;
}

export const ClickAwayListener: React.FC<IClickAwatListener> = ({ onClickAway, children }) => {
  const ref = useRef(null);

  const handleClickOutside = (event): void => {
    if (ref.current && !ref.current.contains(event.target)) {
      onClickAway();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
  return <div ref={ref}>{children}</div>;
};
