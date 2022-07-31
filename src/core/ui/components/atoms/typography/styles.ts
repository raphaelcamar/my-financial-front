import styled, { css } from 'styled-components';
import { FontColorProps, FontSizeProps, FontWeightProps, Shade } from '@/main/styled';
import { TypographyTags } from '@/core/domain/styles';

type TypographyProps = {
  color?: keyof FontColorProps;
  shade?: Shade;
  size?: keyof FontSizeProps;
  weight?: keyof FontWeightProps;
  type?: TypographyTags;
  ellipsis?: boolean;
};

export const TypographyStyle = styled.h1.attrs<TypographyProps>(({ type = 'p' }) => ({
  as: type,
}))<TypographyProps>`
  ${({ color = 'default', size = 'normal', weight = 400, theme, ellipsis }) => css`
    font-size: ${theme.font.size[size]};
    color: ${theme.font.color[color]};
    font-weight: ${theme.font.weight[weight]};
    ${ellipsis &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
  `}
`;
