import styled, { css } from 'styled-components';

type HeaderCardType = {
  open?: boolean;
  color?: string; // TODO
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
  background: ${({ theme }) => theme.palette.primary.main};
`;

export const Pop = styled.div<HeaderCardType>`
  position: absolute;
  transition: all ease-in-out 0.2s;
  left: 22;
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
