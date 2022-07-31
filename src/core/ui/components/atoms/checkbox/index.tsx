/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { InputHTMLAttributes } from 'react';
import { Wrapper } from './styles';

export interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox: React.FC<ICheckbox> = ({ label, ...props }) => (
  <Wrapper>
    <label htmlFor={label}>{label}</label>
    <input id={label} type="checkbox" {...props} />
  </Wrapper>
);
