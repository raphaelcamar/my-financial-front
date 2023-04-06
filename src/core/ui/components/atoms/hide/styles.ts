import styled from 'styled-components';
import { BreakpointTypes, FunctionBreakpointTypes } from '@/main/styled';

type HideType = {
  breakpoint: keyof BreakpointTypes;
  direction: keyof FunctionBreakpointTypes;
};

export const HideChildren = styled.div<HideType>`
  @media (${({ theme, breakpoint, direction }) => theme.breakpoints[direction || 'up'](breakpoint)}) {
    display: none;
  }
`;
