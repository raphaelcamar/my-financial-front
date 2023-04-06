import React, { ReactElement } from 'react';
import { ColorProps } from '@/main/styled';
import { Line } from './styles';

export type ILineFlag = {
  color: keyof ColorProps;
};
export const LineFlag = ({ color }: ILineFlag): ReactElement => <Line color={color} />;
