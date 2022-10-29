import React from 'react';
import { ColorProps } from '@/main/styled';
import { Root, Circle } from './styles';
import { Avatar } from '../../molecules';

export interface ICircularProgress {
  size?: number;
  color?: keyof ColorProps;
}

export const CircularProgress: React.FC<ICircularProgress> = ({ size, color }) => (
  <Root>
    <Circle data-testid="circular-progress" animationDelay={0} size={size} color={color} />
    <Circle data-testid="circular-progress" animationDelay={0.2} size={size} color={color} />
    <Circle data-testid="circular-progress" animationDelay={0.4} size={size} color={color} />
    <Circle data-testid="circular-progress" animationDelay={0.6} size={size} color={color} />
  </Root>
);
