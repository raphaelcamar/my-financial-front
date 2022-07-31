import React, { ButtonHTMLAttributes } from 'react';
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
}

export const IconButton: React.FC<IIconButton> = ({
  icon,
  color = 'primary',
  onClick,
  shade = '500',
  iconProps,
  padding,
  ...props
}) => (
  <Container padding={padding} color={color} shade={shade} onClick={onClick} {...props}>
    <Icon icon={icon} {...iconProps} />
  </Container>
);
