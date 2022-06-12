import React from 'react';
import { IButtonProps } from '@/core/presenters/components/molecules';
import { StyledButton } from './styles';
import { Icon } from '@/core/presenters/components/atoms';

type IGoogleButton = IButtonProps;

export const GoogleButton: React.FC<IGoogleButton> = ({ children, onClick, ...props }) => (
  <StyledButton onClick={onClick} type="button" variant="grey" shade={200} {...props}>
    <Icon icon="google" />
    {children}
  </StyledButton>
);
