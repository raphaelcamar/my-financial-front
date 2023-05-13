import styled, { css, DefaultTheme } from 'styled-components';
import { Variants, CssInputVariants } from '@/core/domain/styles';

type ContainerInputType = CssInputVariants & {
  noBottomRadius?: boolean;
};

const variantStyles = (theme: DefaultTheme, disabled?: boolean, variant: Variants = 'primary') =>
  disabled
    ? css`
        border: 1px solid ${theme.palette.grey[200]};
      `
    : {
        primary: css`
          border: 1px solid ${theme.palette.grey[300]};
          -webkit-box-shadow: 0px 0 3px 0px ${theme.palette.grey[300]};
          -moz-box-shadow: 0px 0 3px 0px ${theme.palette.grey[300]};
          box-shadow: 0px 0 3px 0px ${theme.palette.grey[300]};
          &:focus-within {
            border: 1px solid ${theme.palette.primary.main};
            -webkit-box-shadow: 0px 0 3px 0px ${theme.palette.primary.main};
            -moz-box-shadow: 0px 0 3px 0px ${theme.palette.primary.main};
            box-shadow: 0px 0 3px 0px ${theme.palette.primary.main};
          }
        `,
        error: css`
          border: 1px solid ${theme.palette.error.main};
          -webkit-box-shadow: 0px 0 3px 0px ${theme.palette.error.main};
          -moz-box-shadow: 0px 0 3px 0px ${theme.palette.error.main};
          box-shadow: 0px 0 3px 0px ${theme.palette.error.main};
        `,
        success: css`
          border: 1px solid ${theme.palette.success.main};
          -webkit-box-shadow: 0px 0 3px 0px ${theme.palette.success.main};
          -moz-box-shadow: 0px 0 3px 0px ${theme.palette.success.main};
          box-shadow: 0px 0 3px 0px ${theme.palette.success.main};
        `,
      }[variant];

export const ContainerInput = styled.div<ContainerInputType>`
  height: 46px;
  ${({ disabled, theme, variant }) => variantStyles(theme, disabled, variant)};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  background: #ffffff;
  padding: 0 12px;
  ${({ noBottomRadius }) =>
    noBottomRadius
      ? css`
          border-radius: 8px 8px 0 0;
        `
      : css`
          border-radius: 8px;
        `}
  transition: all ease-out 0.3s;
`;

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
