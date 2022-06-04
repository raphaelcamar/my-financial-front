import styled, { DefaultTheme, css } from 'styled-components';

import { Variants } from '@/core/domain/styles';

type CssInputType = {
  variant: Variants;
  disabled?: boolean;
};

const variantHelperStyles = (
  theme: DefaultTheme,
  disabled?: boolean,
  variant: 'primary' | 'error' | 'success' = 'primary'
) =>
  disabled
    ? css`
        color: ${theme.palette.grey[400]};
      `
    : {
        primary: css`
          color: ${theme.palette.primary[400]};
        `,
        error: css`
          color: ${theme.palette.error.main};
        `,
        success: css`
          color: ${theme.palette.success.main};
        `,
      }[variant];

export const Root = styled.span<CssInputType>`
  font-size: 12px;
  ${({ disabled, theme, variant }) => variantHelperStyles(theme, disabled, variant)}
`;
