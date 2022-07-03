import styled, { css } from 'styled-components';

type WrapperType = {
  loading?: boolean;
};

export const Wrapper = styled.div<WrapperType>`
  width: 100%;
  height: 100%;
  ${({ loading }) =>
    loading
      ? css`
          position: relative;
        `
      : css`
          position: inherit;
        `}
`;

export const Loading = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(242, 244, 247, 0.28);
  backdrop-filter: blur(2px);
`;
