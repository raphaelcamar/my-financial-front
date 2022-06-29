/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';

export interface IStyledCheckbox extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const StyledCheckbox: React.FC<IStyledCheckbox> = ({ label, ...props }) => (
  <>
    <label htmlFor={label}>{label}</label>
    <Container id={label} type="checkbox" {...props} />
  </>
);
