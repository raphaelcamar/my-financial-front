/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import clsx from 'clsx';
import { Icon } from '@/core/presenters/components/atoms';
import { useStyles } from './styles';

interface IActionSidebarAction {
  open: boolean;
  onClick: () => void;
}

export const IconSidebarAction: React.FC<IActionSidebarAction> = ({ open, onClick }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.icon, open ? classes.open : classes.close)} onClick={onClick}>
      <Icon icon="arrowDown" />
    </div>
  );
};
