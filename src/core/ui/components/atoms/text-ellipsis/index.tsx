import React from 'react';
import { Ellipsis } from './styles';

interface ITextEllipsis {
  rows?: number;
  title?: string;
}

export const TextEllipsis: React.FC<ITextEllipsis> = ({ children, rows = 1, title }) => (
  <Ellipsis rows={rows} title={title}>
    {children}
  </Ellipsis>
);
