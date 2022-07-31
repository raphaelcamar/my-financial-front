import styled from 'styled-components';
import { BreakpointTypes } from '@/main/styled';

type HideType = {
  breakpoint: keyof BreakpointTypes;
};

export const HideChildren = styled.div<HideType>`
  @media (${({ theme, breakpoint }) => theme.breakpoints.down(breakpoint)}) {
    display: none;
  }
`;
