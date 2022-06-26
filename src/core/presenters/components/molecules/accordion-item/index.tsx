import React from 'react';
import { Icon } from '@/core/presenters/components/atoms';
import { AvailableIcons } from '@/core/domain';
import { Container } from './styles';

interface IButtonProps {
  onClick?: () => void;
  selected?: boolean;
  path?: string;
  icon?: AvailableIcons;
}

export const AccordionItem: React.FC<IButtonProps> = ({ onClick, path, selected, children, icon }) => (
  <Container selected={selected} to={path} onClick={onClick || null}>
    {icon && <Icon icon={icon} />}
    {children}
  </Container>
);
