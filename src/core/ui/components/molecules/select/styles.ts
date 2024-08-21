import styled, { css } from 'styled-components';
import { Input, IInput } from '@/core/ui/components/molecules/input';

type StyledInputProps = IInput & {
  open?: boolean;
};

type SelectType = {
  open?: boolean;
  error?: boolean;
  selected?: boolean;
  limitHeightIn?: number;
};

export const Container = styled.div`
  position: relative;
`;

export const StyledInput = styled(Input)<StyledInputProps>`
  cursor: pointer;
`;

export const WrapperIcon = styled.div<SelectType>`
  ${({ open }) =>
    open
      ? css`
          transform: rotate(0deg);
        `
      : css`
          transform: rotate(-180deg);
        `}
  transition: all ease 0.1s;
`;

export const OptionsContainer = styled.ul<SelectType>`
  background: ${({ theme }) => theme.palette.background.paper};
  border-radius: 0 0 12px 12px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%); // theme.shadows[1]
  position: absolute;
  width: 100%;
  ${({ open, error, limitHeightIn }) =>
    open
      ? css`
          z-index: 1000;
          height: ${() =>
            limitHeightIn
              ? `
              calc(49px * ${limitHeightIn});
              overflow: auto;
              `
              : 'auto'}

          border: 1px solid ${({ theme }) => (error ? theme.palette.error.main : theme.palette.primary.main)};
          border-top: none;
          transition: max-height 0.25s ease-in;
          top: 70px;
        `
      : css`
          max-height: 0px;
          visibility: hidden;
          overflow: hidden;
          border: none;
        `};
`;

export const Option = styled.li<SelectType>`
  list-style: none !important;
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.palette.grey[200]};
  }

  ${({ theme, selected }) =>
    selected
      ? css`
          background: ${theme.palette.grey[200]};
        `
      : ''}
`;
