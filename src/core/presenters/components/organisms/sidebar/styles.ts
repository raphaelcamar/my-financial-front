import styled, { css } from 'styled-components';
import { SIZES } from '@/core/domain';

type SidebarType = {
  open: boolean;
};

const transitateWidth = (open: boolean) =>
  open
    ? css`
        transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms, margin 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
      `
    : css`
        transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms, margin 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
      `;

export const Container = styled.div<SidebarType>`
  width: ${({ open }) => (open ? SIZES.width : SIZES.marginLeft)}px;
  padding: 24px;
  position: fixed;
  height: 100vh;
  border-right: 1px solid ${({ theme }) => theme.palette.primary[100]};
  ${({ open }) => transitateWidth(open)}
`;
