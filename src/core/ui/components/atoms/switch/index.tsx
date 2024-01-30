import React, { InputHTMLAttributes, forwardRef } from 'react';
import { Container, EmptySpace, InputCheckbox, Slider, SwitchContainer } from './styles';

type SwitchProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(({ label, ...props }, ref) => (
  <Container>
    <label htmlFor={label}>{label}</label>
    <EmptySpace>
      <SwitchContainer>
        <InputCheckbox type="checkbox" id={label} {...props} ref={ref} />
        <Slider />
      </SwitchContainer>
    </EmptySpace>
  </Container>
));
