import styled, { css } from 'styled-components';

type WrapperIconType = {
  size?: number;
};

export const WrapperIcon = styled.div<WrapperIconType>`
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    ${({ size }) =>
      size
        ? css`
            width: ${size}px;
            height: ${size}px;
          `
        : ''}
  }
`;
