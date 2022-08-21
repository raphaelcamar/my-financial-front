import styled, { css } from 'styled-components';

type MenuProfileType = {
  open?: boolean;
  size?: number;
  withArrowIcon?: boolean;
};

export const Wrapper = styled.div<MenuProfileType>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Menu = styled.div<MenuProfileType>`
  display: flex;
  align-items: center;
  justify-content: ${({ withArrowIcon }) => (withArrowIcon ? 'space-between' : 'center')};
  gap: 8px;
  border-radius: ${({ open }) => (open ? '12px 12px 0 0' : '12px')};
  cursor: pointer;
  padding: 8px 12px;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.palette.background.paper};
  height: 46px;

  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    min-width: auto;
  }
`;

export const PopoverElements = styled.div<MenuProfileType>`
  background: ${({ theme }) => theme.palette.background.paper};
  border-radius: 0 0 12px 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 12px;
  padding-top: 0 !important;
  ${({ open, size }) =>
    open
      ? css`
          z-index: 1000;
          height: auto;
          border-top: none;
          top: 46px;
          width: ${size ? `${size}px` : '120px'};
        `
      : css`
          max-height: 0px;
          visibility: hidden;
          overflow: hidden;
          border: none;
        `}
`;

export const Container = styled.div<MenuProfileType>`
  margin: 0px;
  border-radius: 12px;
  padding: 8px 12px;
  transition: all ease 0.3s;
  display: flex;
  justify-content: space-between;
  min-height: 46px;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  position: relative;
  top: 1px;
  left: 1px;
  background: ${({ theme }) => theme.palette.background.paper};
`;

export const PhotoName = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const WrapperIcon = styled.div<MenuProfileType>`
  transition: all ease 0.3s;
  ${({ open }) =>
    open
      ? css`
          transform: rotate(180deg);
        `
      : css`
          transform: rotate(0deg);
        `};
`;

export const WrapperMenuItem = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Border = styled.div`
  border-top: 1px solid ${({ theme }) => theme.palette.grey[100]};
`;
