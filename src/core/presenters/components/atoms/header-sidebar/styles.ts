import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import styled, { css } from 'styled-components';

type HeaderSidebarType = {
  open: boolean;
};

export const useStyles = makeStyles((theme: Theme) => ({
  header: {
    paddingBottom: 16,
    marginBottom: 28,
    display: 'flex',
    gap: 16,
    alignItems: 'center',

    borderBottom: `1px solid ${theme.palette.primary[100]}`,
  },

  center: {
    justifyContent: 'center',
  },
}));

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
