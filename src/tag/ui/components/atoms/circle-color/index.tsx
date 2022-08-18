import React from 'react';
import { Circle } from './styles';

interface ICircleColor {
  color?: string;
}

export const CircleColor: React.FC<ICircleColor> = ({ color }) => <Circle color={color} />;
