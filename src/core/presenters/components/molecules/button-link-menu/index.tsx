import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@/core/presenters/components/atoms';
import { AvailableIcons } from '@/core/domain';
import { useStyles } from './styles';

interface IButtonProps {
  onClick?: () => void;
  selected?: boolean;
  path?: string;
  icon?: AvailableIcons;
}

export const ButtonLinkMenu: React.FC<IButtonProps> = ({ onClick, path, selected, children, icon }) => {
  const classes = useStyles();
  return (
    <Link to={path} onClick={onClick || null} className={clsx(classes.container, selected && classes.selected)}>
      {icon && <Icon icon={icon} />}
      {children}
    </Link>
  );
};
