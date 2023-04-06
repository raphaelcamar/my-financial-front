import styled from 'styled-components';
import { ColorProps } from '@/main/styled';

type HeaderCardType = {
  open?: boolean;
  color?: keyof ColorProps;
};

export const Title = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Circle = styled.div<HeaderCardType>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ theme, color }) => theme.palette?.[color][500]};
`;
