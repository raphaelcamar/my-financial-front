import React from 'react';
import { Icon } from '@/core/ui/components/atoms';
import { IconWrapper } from './styles';

interface ISidebarAction {
  open: boolean;
  onClick: () => void;
}

export const SidebarAction: React.FC<ISidebarAction> = ({ open, onClick }) => (
  <IconWrapper open={open} onClick={onClick}>
    <Icon icon="arrowDown" />
  </IconWrapper>
);
