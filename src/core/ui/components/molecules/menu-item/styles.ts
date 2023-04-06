import styled, { css } from 'styled-components';

type MenuItemType = {
  width?: string;
  text?: boolean;
  disabled?: boolean;
  selected?: boolean;
};

export const Container = styled.div<MenuItemType>`
  border-radius: 8px;
  height: 24px;
  width: ${({ width }) => width || 'auto'};
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 16px 8px;
  ${({ text }) =>
    !text &&
    css`
      justify-content: center;
    `}
  align-items: center;
  color: ${({ theme, disabled }) => (disabled ? theme.palette.grey[50] : theme.palette.grey[500])};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    background: ${({ theme, disabled, selected }) => (disabled || selected ? 'inherit' : theme.palette.grey[200])};
  }
`;
