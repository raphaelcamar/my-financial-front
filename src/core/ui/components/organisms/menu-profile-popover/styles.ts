import styled, { css } from 'styled-components';

type MenuProfileType = {
  open?: boolean;
};

export const Wrapper = styled.div<MenuProfileType>`
  position: relative;
`;

export const Menu = styled.div<MenuProfileType>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-width: 180px;
  border-radius: ${({ open }) => (open ? '12px 12px 0 0' : '12px')};
  cursor: pointer;
  padding: 8px 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.palette.background.paper};

  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    min-width: auto;
  }
`;

export const Popover = styled.div<MenuProfileType>`
  background: ${({ theme }) => theme.palette.background.paper};
  border-radius: 0 0 12px 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding: 8px 12px;
  padding-top: 0 !important;
  ${({ open }) =>
    open
      ? css`
          z-index: 1000;
          height: auto;
          border-top: none;
          top: 46px;
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
  border-radius: 24px;
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
  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    display: none;
  }
`;

export const WrapperMenuItem = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Border = styled.div`
  border-top: 1px solid ${({ theme }) => theme.palette.grey[100]};
`;
