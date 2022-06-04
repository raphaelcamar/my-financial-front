import React from 'react';
import { BaseInput, ContainerInput } from './styles';

export interface IInputNew {
  variant?: 'error' | 'success';
  disabled?: boolean;
}

export const InputNew: React.FC<IInputNew> = ({ variant }) => (
  <ContainerInput variant={variant}>
    <BaseInput />
  </ContainerInput>
);
