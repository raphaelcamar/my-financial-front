import styled, { css } from 'styled-components';
import { SIZES } from '@/core/domain';

type SidebarType = {
  open: boolean;
};

const changeWidth = (open?: boolean) =>
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
  padding: 12px ${({ open }) => (open ? 24 : 12)}px;
  transition: all ease 0.3s;
  position: fixed;
  height: 100vh;
  border-right: 1px solid ${({ theme }) => theme.palette.primary[100]};
  transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms, margin 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
`;

export const WrapperSidebar = styled.div<SidebarType>`
  ${({ open }) => changeWidth(open)}
`;
