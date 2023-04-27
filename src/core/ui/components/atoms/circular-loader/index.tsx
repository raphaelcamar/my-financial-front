import React, { ReactElement } from 'react';
import { Container } from './styles';
import { ColorProps } from '@/main/styled';

export type ICircularLoader = {
  color?: keyof ColorProps;
  size?: number;
};

const defaultProps = {
  color: 'grey',
  size: 30,
};

export const CircularLoader = ({ color, size }: ICircularLoader): ReactElement => (
  <Container viewBox="0 0 50 50" color={color} size={size}>
    <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="2" />
  </Container>
);

CircularLoader.defaultProps = defaultProps;
