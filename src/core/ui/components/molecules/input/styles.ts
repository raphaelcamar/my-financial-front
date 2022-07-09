import styled, { css, DefaultTheme } from 'styled-components';
import { Variants, CssInputVariants } from '@/core/domain/styles';

type ContainerInputType = CssInputVariants & {
  noBottomRadius?: boolean;
};

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

export const ContainerInput = styled.div<ContainerInputType>`
  height: 46px;
  ${({ disabled, theme, variant }) => variantStyles(theme, disabled, variant)};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 0 12px;
  ${({ noBottomRadius }) =>
    noBottomRadius
      ? css`
          border-radius: 12px 12px 0 0;
        `
      : css`
          border-radius: 12px;
        `}
  transition: all ease-out 0.3s;
`;

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
