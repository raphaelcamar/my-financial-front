import React, { InputHTMLAttributes, ReactElement } from 'react';
import { Container, EmptySpace, InputCheckbox, Slider, SwitchContainer } from './styles';

type SwitchProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Switch = ({ label, ...props }: SwitchProps): ReactElement => (
  <Container>
    <label htmlFor={label}>{label}</label>
    <EmptySpace>
      <SwitchContainer>
        <InputCheckbox type="checkbox" id={label} {...props} />
        <Slider />
      </SwitchContainer>
    </EmptySpace>
  </Container>
);
