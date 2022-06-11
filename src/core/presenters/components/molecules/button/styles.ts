import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonVariant, ShadeButton, StyleType } from '@/core/domain/styles';

type ButtonType = {
  variant?: ButtonVariant;
  styleType?: StyleType;
  shade?: ShadeButton;
};

const getVariantStyles = (
  theme: DefaultTheme,
  disabled?: boolean,
  styleType: StyleType = 'fullfiled',
  variant: ButtonVariant = 'primary',
  shade: ShadeButton = 500
) =>
  disabled
    ? css`
        background-color: ${theme.palette.grey[300]};
        color: ${theme.palette.grey[600]};
        transition: none;
        cursor: inherit;
        &:active {
          transform: none;
        }
      `
    : {
        outlined: css`
          background: transparent;
          border: 1px solid ${theme.palette[variant][shade]};
          color: ${theme.palette[variant][shade]};
          font-weight: 500;
        `,
        fullfiled: css`
          background: ${theme.palette[variant][shade]};
          border: none;
          color: ${shade < 500 ? theme.font.color.primary : ''};
        `,
        glass: css`
          background: ${theme.palette.grey[100]};
          color: ${theme.palette[variant][500]};
          font-weight: 700;
        `,
      }[styleType];

export const ButtonStyle = styled.button<ButtonType>`
  border-radius: 12px;
  color: ${({ theme }) => theme.palette.grey[100]};
  height: 46px;
  font-size: 14px;
  padding: 0px 8px;
  border: none;
  transition: all ease 0.08s;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }

  &:disabled {
    background: ${({ theme }) => theme.palette.grey[300]};
    color: ${({ theme }) => theme.palette.grey[700]};
  }
  ${({ theme, styleType, variant, shade, disabled }) => getVariantStyles(theme, disabled, styleType, variant, shade)}
`;
