import styled, { css } from 'styled-components';
import { SIZES } from '@/core/domain';

type SideBarActionType = {
  open: boolean;
};

const openCloseStyle = (isOpen: boolean) =>
  isOpen
    ? css`
        transform: rotate(90deg);
      `
    : css`
        left: 0px;
        margin-left: calc(91px - 41px / 2);
        transform: rotate(270deg) scale(0.8);
        &:hover {
          transform: rotate(270deg) scale(1);
        }
      `;

export const IconWrapper = styled.div<SideBarActionType>`
  background: ${({ theme }) => theme.palette.primary[50]};
  box-shadow: 0px 0 0px 0px rgb(0 0 0 / 20%), 0px 0px 2px 0px rgb(0 0 0 / 14%), 0px 0px 6px 1px rgb(0 0 0 / 12%);
  border-radius: 50%;
  padding: 12px 10px;
  position: fixed;
  left: 0px;
  margin-top: 32px;
  margin-left: calc(${SIZES.width}px - 14px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
  z-index: 10;
  top: -12px;
  ${({ open }) => openCloseStyle(open)}
`;
