import React from 'react';
import { AvailableIcons } from '@/core/domain';
import { Icon, IconProps } from '@/core/presenters/components/atoms';
import { Container } from './styles';
import { ColorProps, VariantProps } from '@/main/styled';

export interface IIconButton extends React.HTMLAttributes<HTMLDivElement> {
  icon?: AvailableIcons;
  color: keyof ColorProps;
  shade: keyof VariantProps;
  iconProps?: Omit<IconProps, 'icon'>;
  onClick: () => void;
}

export const IconButton: React.FC<IIconButton> = ({ icon, color = 'primary', onClick, shade = '500', iconProps }) => (
  <Container color={color} shade={shade} onClick={onClick}>
    <Icon icon={icon} {...iconProps} />
  </Container>
);
