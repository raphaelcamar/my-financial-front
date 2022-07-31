import styled, { keyframes } from 'styled-components';
import { ColorProps, Shade } from '@/main/styled';

type CircleType = {
  size?: number;
  color?: keyof ColorProps;
  shade?: keyof Shade;
  animationDelay?: number;
};

const Bounce = keyframes`
  from { transform: translateY(-0.3rem);  }
  to { transform: translateY(0.3rem);  }
`;

export const Root = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
`;

export const Circle = styled.div<CircleType>`
  width: ${({ size }) => size || 10}px;
  height: ${({ size }) => size || 10}px;
  border-radius: 50%;
  transform: translateY(-0.3rem);
  background: ${({ theme, color }) => theme.palette?.[color]?.[500] || theme.palette.grey[50]};
  animation: ${Bounce} 0.8s ease-in-out infinite alternate forwards;
  animation-delay: ${({ animationDelay }) => animationDelay}s;
`;
