import React from 'react';
import { Typography } from '@/core/ui/components/atoms';
import { Root } from './styles';

export interface IAuthTitle {
  title: string;
  description: string;
}

export const AuthTitle: React.FC<IAuthTitle> = ({ title, description }) => (
  <Root data-testid="auth-title">
    <Typography type="h1" size="xxxlarge" weight={700}>
      {title}
    </Typography>
    <Typography type="p" color="grey" size="normal">
      {description}
    </Typography>
  </Root>
);
