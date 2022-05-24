import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

interface ITextLink {
  children: ReactNode;
  to: string;
}

export const TextLink: React.FC<ITextLink> = ({ children, to }) => {
  const classes = useStyles();
  return (
    <Link to={to} className={classes.link}>
      {children}
    </Link>
  );
};
