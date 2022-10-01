import styled, { css } from 'styled-components';
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

export const Pop = styled.div<HeaderCardType>`
  display: flex;
  min-width: 120px;
  flex-direction: column;
  gap: 4px;
  background: ${({ theme }) => theme.palette.background.paper};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 8px;
  ${({ open }) =>
    open
      ? css`
          transform: scale(1);
        `
      : css`
          transform: scale(0);
        `};
`;
