import React from 'react';
import { ColorProps } from '@/main/styled';
import { Root, Circle } from './styles';

export interface ICircularProgress {
  size?: number;
  color?: keyof ColorProps;
}

export const CircularProgress: React.FC<ICircularProgress> = ({ size, color }) => (
  <Root>
    <Circle animationDelay={0} size={size} color={color} />
    <Circle animationDelay={0.2} size={size} color={color} />
    <Circle animationDelay={0.4} size={size} color={color} />
    <Circle animationDelay={0.6} size={size} color={color} />
  </Root>
);
