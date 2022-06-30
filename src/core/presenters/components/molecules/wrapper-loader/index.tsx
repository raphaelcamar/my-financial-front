import React, { ReactNode } from 'react';
import { CircularProgress } from '../../atoms';
import { Wrapper, Loading } from './styles';

interface IWrapperLoader {
  loading?: boolean;
  children: ReactNode;
  sizeLoading?: number;
}

export const WrapperLoader: React.FC<IWrapperLoader> = ({ children, loading, sizeLoading = 25 }) => (
  <Wrapper loading={loading}>
    {loading ? (
      <>
        <Loading>
          <CircularProgress size={sizeLoading} />
        </Loading>
        {children}
      </>
    ) : (
      children
    )}
  </Wrapper>
);
