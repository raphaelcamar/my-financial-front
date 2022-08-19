import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { AvailableIcons } from '@/core/domain';
import { Icon, IconProps } from '@/core/ui/components/atoms';
import { Container } from './styles';
import { ColorProps, VariantProps } from '@/main/styled';

export interface IIconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: AvailableIcons;
  color: keyof ColorProps;
  shade: keyof VariantProps;
  iconProps?: Omit<IconProps, 'icon'>;
  padding?: [number, number];
  noBackground?: boolean;
}

export const IconButton = forwardRef<HTMLButtonElement, IIconButton>(
  ({ icon, color = 'primary', onClick, shade = '500', iconProps, noBackground, padding, ...props }, ref) => (
    <Container
      ref={ref}
      padding={padding}
      color={color}
      shade={shade}
      onClick={onClick}
      noBackground={noBackground}
      {...props}
    >
      <Icon icon={icon} {...iconProps} />
    </Container>
  )
);
