import React, { forwardRef, InputHTMLAttributes } from 'react';
import { StyledInput, ContainerInputPin } from './styles';

type IInputPin = InputHTMLAttributes<HTMLInputElement>;

export const InputPin = forwardRef<HTMLInputElement, IInputPin>(({ ...props }, ref) => (
  <ContainerInputPin>
    <StyledInput maxLength={1} {...props} ref={ref} />
  </ContainerInputPin>
));
