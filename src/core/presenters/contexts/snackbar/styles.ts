import { SnackbarProvider } from 'notistack';
import styled from 'styled-components';

export const SnackbarProv = styled(SnackbarProvider)`
  &.SnackbarItem-variantSuccess {
    background: ${({ theme }) => theme.palette.success.main} !important;
  }

  &.SnackbarItem-variantError {
    background: ${({ theme }) => theme.palette.error.main} !important;
  }

  &.SnackbarItem-variantInfo {
    background: ${({ theme }) => theme.palette.info.main} !important;
  }

  &.SnackbarItem-variantWarning {
    background: ${({ theme }) => theme.palette.warning.main} !important;
  }
`;
