import React, { forwardRef, InputHTMLAttributes } from 'react';
import { Input } from './styles';

export const InputBase = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(({ ...props }, ref) => (
  <Input autoComplete="off" {...props} ref={ref} />
));
