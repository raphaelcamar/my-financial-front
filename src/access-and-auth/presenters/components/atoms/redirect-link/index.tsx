import React from 'react';
import { TextLink, Typography } from '@/core/presenters/components/atoms';

interface IRedirectLink {
  question: string;
  link: string;
  to: string;
}

export const RedirectLink: React.FC<IRedirectLink> = ({ question, link, to }) => (
  <Typography variant="body1">
    {question}
    <TextLink to={to}>{link}</TextLink>
  </Typography>
);