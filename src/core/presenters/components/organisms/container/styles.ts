import styled, { css } from 'styled-components';
import { SIZES } from '@/core/domain';

type ContainerContentType = {
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

export const Content = styled.div<ContainerContentType>`
  flex-grow: 1;
  padding: 28px 36px;
  background: ${({ theme }) => theme.palette.grey[50]};
  min-height: 100vh;
  ${({ open }) => transitateWidth(open)}
  margin-left: ${({ open }) => (open ? SIZES.width : SIZES.marginLeft)}px;
  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    margin-left: 0 !important;
    padding: 28px 36px;
  }
`;

export const WrapperSidebar = styled.div`
  visibility: visible;
  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    visibility: hidden;
  }
`;
export const WrapperDrawer = styled.div`
  visibility: hidden;
  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    width: 60% !important;
    visibility: visible;
  }
`;

export const ContentDrawer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const HeaderDrawer = styled.div`
  display: flex;
  gap: 24px;
  padding: 24px 0;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary[100]};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-content: center;
  cursor: pointer;
`;
