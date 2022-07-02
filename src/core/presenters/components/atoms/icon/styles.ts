import styled, { css } from 'styled-components';

type WrapperIconType = {
  size?: number;
};

export const WrapperIcon = styled.div<WrapperIconType>`
  display: flex;
  align-content: center;
  ${({ size }) =>
    size
      ? css`
          width: ${size}px;
        `
      : ''}
`;
