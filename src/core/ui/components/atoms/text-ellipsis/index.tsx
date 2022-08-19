import React from 'react';
import { Ellipsis } from './styles';

interface ITextEllipsis {
  rows?: number;
}

export const TextEllipsis: React.FC<ITextEllipsis> = ({ children, rows = 1 }) => (
  <Ellipsis rows={rows}>{children}</Ellipsis>
);
