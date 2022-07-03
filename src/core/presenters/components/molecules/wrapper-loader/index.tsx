import React, { ReactNode } from 'react';
import { CircularProgress, ICircularProgress } from '@/core/presenters/components/atoms';
import { Wrapper, Loading } from './styles';

interface IWrapperLoader extends ICircularProgress {
  loading?: boolean;
  children: ReactNode;
}

export const WrapperLoader: React.FC<IWrapperLoader> = ({ children, loading, size = 20, color }) => (
  <Wrapper loading={loading}>
    {loading ? (
      <>
        <Loading>
          <CircularProgress size={size} color={color} />
        </Loading>
        {children}
      </>
    ) : (
      children
    )}
  </Wrapper>
);
