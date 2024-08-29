import React, { ReactNode } from 'react';
import { TypographyTags } from '@/core/domain/styles';
import { ColorProps, FontSizeProps, FontWeightProps, Shade } from '@/main/styled';
import { TypographyStyle } from './styles';

interface ITypography {
  color?: keyof ColorProps;
  shade?: Shade;
  size?: keyof FontSizeProps;
  weight?: keyof FontWeightProps;
  type?: TypographyTags;
  children: ReactNode;
  ellipsis?: boolean;
  title?: string;
}

export const Typography: React.FC<ITypography> = ({ children, title, ...props }) => (
  <TypographyStyle title={title} data-testid="typography" {...props}>
    {children}
  </TypographyStyle>
);
