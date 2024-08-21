import React, { ReactElement, ReactNode } from 'react';
import { Option } from './styles';

export type AutocompleteOptionProps = {
  disabled?: boolean;
  selected?: boolean;
  actions?: ReactElement;
  onClick?: () => void;
  children: ReactNode;
};

export const AutocompleteOption = ({
  disabled,
  selected,
  actions,
  children,
  onClick,
  ...props
}: AutocompleteOptionProps): ReactElement => (
  <Option disabled={disabled} selected={selected} {...props} onClick={onClick}>
    <span>{children}</span>
    {actions && actions}
  </Option>
);
