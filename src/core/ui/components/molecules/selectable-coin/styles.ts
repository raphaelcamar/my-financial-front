import styled, { css } from 'styled-components';

type SelectType = {
  open?: boolean;
  error?: boolean;
  selected?: boolean;
};

export const Container = styled.div<SelectType>`
  max-width: 50px;
  position: relative;
  /* background: ${({ theme }) => theme.palette.grey[200]}; */
  color: ${({ theme }) => theme.font.color.default};
  border-radius: ${({ open }) => (open ? '0 8px 0 0' : '0 8px 8px 0')};
  border: 1px solid ${({ theme, error }) => (error ? theme.palette.error.main : 'transparent')};
  transition: all ease 0.2s;
`;

export const ContainerSelection = styled.div``;

export const Coin = styled.div`
  cursor: pointer;
  padding: 8px;
`;

export const Options = styled.div<SelectType>`
  background: ${({ theme }) => theme.palette.background.paper};
  border-radius: 0 0 8px 8px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%); // theme.shadows[1]
  position: absolute;
  width: 100%;

  ${({ open, error }) =>
    open
      ? css`
          z-index: 1000;
          height: auto;
          border: 1px solid ${({ theme }) => (error ? theme.palette.error.main : theme.palette.primary.main)};
          border-top: none;
          transition: max-height 0.25s ease-in;
          top: 35px;
        `
      : css`
          max-height: 0px;
          visibility: hidden;
          overflow: hidden;
          border: none;
        `};
`;

export const Option = styled.div``;
