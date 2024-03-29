import styled, { css } from 'styled-components';
import { ColorProps, FontSizeProps, FontWeightProps, Shade } from '@/main/styled';
import { TypographyTags } from '@/core/domain/styles';

type TypographyProps = {
  color?: keyof ColorProps;
  shade?: Shade;
  size?: keyof FontSizeProps;
  weight?: keyof FontWeightProps;
  type?: TypographyTags;
  ellipsis?: boolean;
};

export const TypographyStyle = styled.h1.attrs<TypographyProps>(({ type = 'p' }) => ({
  as: type,
}))<TypographyProps>`
  ${({ color, size = 'normal', weight = 400, theme, ellipsis, shade }) => css`
    font-size: ${theme.font.size[size]};
    color: ${theme.palette[color]?.[shade] || theme.font.color.default};
    font-weight: ${theme.font.weight[weight]};
    ${ellipsis &&
    css`
      white-space: nowrap;
      width: 100%;
      overflow: hidden;
    `}
  `}
`;
