import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

interface IButtonProps {
  onClick?: () => void;
  selected?: boolean;
  path?: string;
}

export const ButtonLinkMenu: React.FC<IButtonProps> = ({ onClick, path, selected, children }) => {
  const classes = useStyles();
  return (
    <Link to={path} onClick={onClick || null} className={clsx(classes.container, selected && classes.selected)}>
      {children}
    </Link>
  );
};
