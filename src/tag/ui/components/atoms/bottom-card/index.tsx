import React from 'react';
import { Typography } from '@/core/ui/components/atoms';
import { Button } from '@/core/ui/components/molecules';
import { Footer } from './styles';
import { formatDate } from '@/core/utils';

interface IBottonCard {
  createdAt: Date;
  isInactive: boolean;
}

export const BottomCard: React.FC<IBottonCard> = ({ createdAt, isInactive }) => (
  <Footer>
    <Typography shade={400} size="small" color="grey" type="span">
      Criado em {formatDate(createdAt)}
    </Typography>
    <Button styleType="outlined" type="button" variant={isInactive ? 'success' : 'error'}>
      {isInactive ? 'Ativar' : 'Inativar'}
    </Button>
  </Footer>
);
