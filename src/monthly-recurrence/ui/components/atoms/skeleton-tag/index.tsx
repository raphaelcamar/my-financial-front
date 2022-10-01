import React from 'react';
import { Skeleton } from '@/core/ui/components/atoms';
import { Header, StyledPaper } from './styles';

interface ISkeletonTag {
  quantity: number;
}

export const SkeletonTag: React.FC<ISkeletonTag> = ({ quantity }) => (
  <>
    {Array.from({ length: quantity }, (_, index) => (
      <StyledPaper density={1}>
        <Header>
          <Skeleton shade={200} height={48} width={48} borderRadius={48} />
          <Skeleton shade={200} width="100%" height={24} />
        </Header>
        <Skeleton width="100%" height={24} />
        <Skeleton shade={200} width="50%" height={24} />
      </StyledPaper>
    ))}
  </>
);
