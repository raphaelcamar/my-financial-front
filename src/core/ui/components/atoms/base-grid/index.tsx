import React, { ReactElement, ReactNode } from 'react';
import { Container } from './styles';

interface IBaseGrid {
  children: ReactNode;
}

export const BaseGrid = ({ children }: IBaseGrid): ReactElement => <Container>{children}</Container>;
