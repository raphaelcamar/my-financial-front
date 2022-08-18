import styled from 'styled-components';

type CircleType = {
  color?: string; // TODO
};

export const Circle = styled.div<CircleType>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ theme }) => theme.palette.primary.main};
`;
