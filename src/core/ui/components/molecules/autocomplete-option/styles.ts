import styled, { css } from 'styled-components';

type Styles = {
  disabled?: boolean;
  selected?: boolean;
};

export const Option = styled.div<Styles>`
  list-style: none !important;
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.palette.grey[200]};
  }

  ${({ theme, selected }) =>
    selected
      ? css`
          background: ${theme.palette.grey[200]};
          color: ${theme.palette.primary.main};
        `
      : ''}

  ${({ disabled, theme }) =>
    disabled
      ? css`
          color: ${theme.palette.grey[300]};
          &:hover {
            background: inherit;
            cursor: inherit;
          }
        `
      : ''}
`;
