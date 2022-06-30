import styled, { css } from 'styled-components';

type AccordionType = {
  open?: boolean;
  selected?: boolean;
  sidebarOpen?: boolean;
};

export const Container = styled.div<AccordionType>`
  margin: 0px;
  border-radius: 8px;
  ${({ sidebarOpen, open }) =>
    !sidebarOpen &&
    open &&
    css`
      border-radius: 8px 8px 0 0;
    `}
  padding: 8px 16px;
  transition: all ease 0.3s;
  display: flex;
  justify-content: ${({ sidebarOpen }) => (sidebarOpen ? 'space-between' : 'center')};
  min-height: 46px;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: ${({ theme, selected, open }) => (selected || open ? '' : theme.palette.primary[50])};
  }

  background: ${({ theme, selected, open }) => (selected || open ? theme.palette.primary.main : '')};
`;

export const Wrapper = styled.div<AccordionType>`
  overflow-anchor: none;
  box-shadow: none;
  background: none;
  transition: margin 150ms ease;
  ${({ sidebarOpen }) =>
    sidebarOpen &&
    css`
      height: 44px;
    `}
  ${({ open }) =>
    open &&
    css`
      margin-bottom: 0;
    `}
`;

export const AccordionHeader = styled.div<AccordionType>`
  display: flex;
  gap: 16px;
  align-items: center;
  ${({ sidebarOpen }) =>
    sidebarOpen &&
    css`
      justify-content: center;
      height: 44px;
    `}
`;

export const Children = styled.div<AccordionType>`
  transition-duration: 217ms;
  min-height: 0px;
  height: 0px;
  transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  ${({ open }) =>
    open
      ? css`
          visibility: visible;
          height: 64px;
          overflow: auto;
          overflow-y: hidden;
        `
      : css`
          height: 0px;
          overflow: hidden;
        `}
`;

export const WrapperIcon = styled.div<AccordionType>`
  transition: all ease 0.3s;
  ${({ open }) =>
    open
      ? css`
          transform: rotate(0deg);
        `
      : css`
          transform: rotate(180deg);
        `};
`;
