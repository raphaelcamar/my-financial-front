import styled, { css } from 'styled-components';

type DrawerType = {
  open?: boolean;
  side?: 'left' | 'right';
  fullWidth?: boolean;
  noRadius?: boolean;
  widthSize?: string;
};

export const getSideDrawer = (side: 'left' | 'right', open: boolean, fullWidth?: boolean) => {
  if (open) {
    return side === 'left'
      ? css`
          left: ${fullWidth ? '0' : '24px'};
        `
      : css`
          right: ${fullWidth ? '0' : '24px'};
        `;
  }
  return side === 'left'
    ? css`
        left: 0;
      `
    : css`
        right: 0;
      `;
};

export const Container = styled.div<DrawerType>`
  position: fixed;
  opacity: ${({ open }) => (open ? 1 : 0)};
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  z-index: ${({ open }) => (open ? 1200 : -1000)};
  background: #1a1a1aa2;
  height: 100%;
  overflow: hidden;
`;

export const GhostDiv = styled.div`
  opacity: 1;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export const DrawerWrapper = styled.div<DrawerType>`
  transition: all 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  height: ${({ fullWidth }) => (fullWidth ? '100vh' : '90vh')};
  max-width: ${({ fullWidth }) => (fullWidth ? '505px' : '')};
  width: ${({ widthSize }) => widthSize || 'auto'};
  position: absolute;
  ${({ open, side, fullWidth }) => getSideDrawer(side, open, fullWidth)}

  padding: ${({ fullWidth }) => (fullWidth ? '12px 24px' : '28px 36px;')};
  /* min-width: ${({ fullWidth }) => (fullWidth ? '0' : '504px')}; */
  margin-top: ${({ fullWidth }) => (fullWidth ? '0' : '48px')};
  border-radius: ${({ noRadius }) => (noRadius ? '0' : '16px')};
  background: ${({ theme }) => theme.palette.background.paper};
`;
