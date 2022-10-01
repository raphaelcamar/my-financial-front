import React from 'react';
import { Typography } from '@/core/ui/components/atoms';
import { Button } from '@/core/ui/components/molecules';
import { Footer } from './styles';
import { formatDate } from '@/core/utils';
import { TagStatus } from '@/monthly-recurrence/domain/entities';

interface IBottonCard {
  createdAt: Date;
  isInactive: boolean;
  modifyTagStatus: (tagStatus: TagStatus) => Promise<void>;
  loading: boolean;
}

export const BottomCard: React.FC<IBottonCard> = ({ createdAt, isInactive, loading, modifyTagStatus }) => (
  <Footer>
    <Typography shade={400} size="small" color="grey" type="span">
      Criado em {formatDate(createdAt)}
    </Typography>
    <Button
      styleType="outlined"
      type="button"
      loading={loading}
      disabled={loading}
      colorLoading={isInactive ? 'success' : 'error'}
      sizeLoading={10}
      variant={isInactive ? 'success' : 'error'}
      onClick={() => modifyTagStatus(isInactive ? 'active' : 'inactive')}
    >
      {isInactive ? 'Ativar' : 'Inativar'}
    </Button>
  </Footer>
);
