import styled, { css, DefaultTheme } from 'styled-components';
import { Variants, CssInputVariants } from '@/core/domain/styles';

const variantStyles = (theme: DefaultTheme, disabled?: boolean, variant: Variants = 'primary') =>
  disabled
    ? css`
        border: 1px solid ${theme.palette.grey[300]};
      `
    : {
        primary: css`
          border: 1px solid ${theme.palette.grey[400]};
          &:focus-within {
            border: 1px solid ${theme.palette.primary.main};
          }
        `,
        error: css`
          border: 1px solid ${theme.palette.error.main};
        `,
        success: css`
          border: 1px solid ${theme.palette.success.main};
        `,
      }[variant];

export const BaseInput = styled.input`
  all: unset;
  height: 100%;
  width: 100%;

  &::-webkit-autofill {
    -webkit-box-shadow: 0 0 0 40px white inset !important;
    box-shadow: 0 0 0 40px white inset !important;
  }

  &::placeholder {
    color: ${props => props.theme.palette.grey[700]};
  }

  &:disabled {
    color: ${props => props.theme.palette.grey[400]};

    &::placeholder {
      color: ${props => props.theme.palette.grey[400]};
    }
  }
`;

export const ContainerInput = styled.div<CssInputVariants>`
  height: 46px;
  ${({ disabled, theme, variant }) => variantStyles(theme, disabled, variant)};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 18px;
  border-radius: 12px;
  transition: all ease-out 0.3s;
`;

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
