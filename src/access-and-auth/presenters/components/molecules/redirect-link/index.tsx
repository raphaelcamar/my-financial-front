import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@/core/presenters/components/atoms';
import { useStyles } from './styles';

interface IRedirectLink {
  question: string;
  link: string;
  to: string;
}

export const RedirectLink: React.FC<IRedirectLink> = ({ question, link, to }) => {
  const classes = useStyles();

  return (
    <Typography variant="body1">
      {question}
      <Link to={to} className={classes.link}>
        {link}
      </Link>
    </Typography>
  );
};
