import styled, { css } from 'styled-components';

type HeaderSidebarType = {
  open: boolean;
};

export const Header = styled.div<HeaderSidebarType>`
  padding-bottom: 16px;
  margin-bottom: 28px;
  display: flex;
  gap: 16px;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary[100]};
  ${({ open }) =>
    !open &&
    css`
      justify-content: center;
    `}
`;
