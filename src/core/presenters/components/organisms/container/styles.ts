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
  padding: 28px 48px;
  background: ${({ theme }) => theme.palette.grey[50]};
  min-height: 100vh;
  ${({ open }) => transitateWidth(open)}
  margin-left: ${({ open }) => (open ? SIZES.width : SIZES.marginLeft)}px;
`;
