import React from 'react';
import { Typography } from '@/core/presenters/components/atoms';
import { ContainerHeader } from './styles';

interface IHheaderProps {
  title: string;
}

export const Header: React.FC<IHheaderProps> = ({ title }) => (
  <ContainerHeader>
    <Typography type="h1" size="xxxlarge">
      {title}
    </Typography>
  </ContainerHeader>
);
