import React, { ReactNode } from 'react';
import { TypographyTags } from '@/core/domain/styles';
import { FontColorProps, FontSizeProps, FontWeightProps, Shade } from '@/main/styled';
import { TypographyStyle } from './styles';

interface ITypography {
  color?: keyof FontColorProps;
  shade?: Shade;
  size?: keyof FontSizeProps;
  weight?: keyof FontWeightProps;
  type?: TypographyTags;
  children: ReactNode;
  ellipsis?: boolean;
}

export const Typography: React.FC<ITypography> = ({ children, ...props }) => (
  <TypographyStyle data-testid="typography" {...props}>
    {children}
  </TypographyStyle>
);
