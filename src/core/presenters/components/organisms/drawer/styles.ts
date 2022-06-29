import styled, { css } from 'styled-components';

type DrawerType = {
  open?: boolean;
};

export const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 48px;
`;

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
  height: 90vh;
  max-width: 505px;
  position: absolute;
  ${({ open }) =>
    open
      ? css`
          right: 24px;
        `
      : css`
          right: 0;
        `}

  padding: 28px 36px;
  min-width: 504px;
  margin-top: 48px;
  border-radius: 16px;
  background: ${({ theme }) => theme.palette.background.paper};
`;
