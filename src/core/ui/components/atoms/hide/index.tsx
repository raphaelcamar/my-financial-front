import React from 'react';
import { BreakpointTypes } from '@/main/styled';
import { HideChildren } from './styles';

interface IHide {
  breakpoint: keyof BreakpointTypes;
}
export const Hide: React.FC<IHide> = ({ children, breakpoint = 'md' }) => (
  <HideChildren breakpoint={breakpoint}>{children}</HideChildren>
);
