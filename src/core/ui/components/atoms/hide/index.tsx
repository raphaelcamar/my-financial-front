import React from 'react';
import { BreakpointTypes, FunctionBreakpointTypes } from '@/main/styled';
import { HideChildren } from './styles';

interface IHide {
  breakpoint: keyof BreakpointTypes;
  direction?: keyof FunctionBreakpointTypes;
}
export const Hide: React.FC<IHide> = ({ children, breakpoint = 'md', direction = 'down' }) => (
  <HideChildren breakpoint={breakpoint} direction={direction}>
    {children}
  </HideChildren>
);
