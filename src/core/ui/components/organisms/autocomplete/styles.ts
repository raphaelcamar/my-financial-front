import styled, { css } from 'styled-components';

type OptionsContainerProps = {
  open?: boolean;
};

type SelectType = {
  open?: boolean;
  error?: boolean;
  selected?: boolean;
  width?: number;
  maxOptions?: number;
  disabled?: boolean;
};

export const InputContainer = styled.div<OptionsContainerProps>`
  position: relative;

  .input-variant {
    ${({ theme, open }) =>
      open
        ? css`
            border: 1px solid ${theme.palette.primary.main};
          `
        : ''}
  }
`;

export const OptionsContainer = styled.ul<SelectType>`
  all: unset;
  position: absolute;
  transition-duration: 100ms;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  top: 73px;
  z-index: 1;
  width: calc(100% - 2px);
  max-height: 500px;
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.palette.grey[300]};
    border-radius: 12px;
  }
  ${({ open, error, maxOptions }) =>
    open
      ? css`
          display: inherit;
          overflow: auto;
          height: calc(${maxOptions} * 50px);
          border: 1px solid ${({ theme }) => (error ? theme.palette.error.main : theme.palette.primary.main)};
          border-top: none;
        `
      : css`
          display: none;
          border-bottom: none;
          border: none;
        `}

  background: ${({ theme }) => theme.palette.background.paper};
  border-radius: 0 0 12px 12px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%); // theme.shadows[1]

  .input {
    border: 1px solid black !important;
  }
`;

export const NoOptionMessage = styled.div<SelectType>`
  color: ${({ theme }) => theme.palette.grey[600]};
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
`;
