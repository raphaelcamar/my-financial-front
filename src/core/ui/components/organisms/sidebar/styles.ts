import styled, { css } from 'styled-components';
import { SIZES } from '@/core/domain';

type SidebarType = {
  open: boolean;
};

const changeCssOrientations = (open?: boolean) =>
  open
    ? css`
        width: ${SIZES.width};
      `
    : css`
        width: 80px;
      `;

export const Container = styled.div<SidebarType>`
  width: ${({ open }) => (open ? SIZES.width : SIZES.marginLeft)}px;
  padding: 24px;
  padding: 20px ${({ open }) => (open ? 24 : 12)}px;
  transition: all ease 0.3s;
  position: fixed;
  height: 100vh;
  z-index: 5;
  background: ${({ theme }) => theme.palette.grey[50]};
  border-radius: ${({ open }) => (open ? '0 24px 24px 0' : '0px')};
  box-shadow: 0px 4px 6px 4px rgba(0, 0, 0, 0.25);
  transition: all 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms, margin 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
`;

export const WrapperSidebar = styled.aside<SidebarType>`
  ${({ open }) => changeCssOrientations(open)}
`;
