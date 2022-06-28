import React, { ReactNode } from 'react';
import { StyledLink } from './styles';

interface ITextLink {
  children: ReactNode;
  to: string;
}

export const TextLink: React.FC<ITextLink> = ({ children, to }) => <StyledLink to={to}>{children}</StyledLink>;
