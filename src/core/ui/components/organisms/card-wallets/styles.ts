import styled, { css } from 'styled-components';
import { ICardWallets } from '.';

type OpenContainer = {
  open?: boolean;
};

type CardWallets = {
  selected: boolean;
};

export const Container = styled.div<OpenContainer>`
  padding: 12px;
  width: 320px;
  background: white;
  box-shadow: 0px 4px 4px 0px #00000040;
  padding: 12px;
  border-radius: 12px;

  display: flex;
  gap: 4px;
  flex-direction: column;
  align-items: center;

  ${({ open }) =>
    open
      ? css`
          z-index: 1000;
          height: auto;
          border-top: none;
          top: 15px !important;
          /* width: 350px;   */
        `
      : css`
          max-height: 0px;
          visibility: hidden;
          overflow: hidden;
          border: none;
        `}
`;

export const Item = styled.button<CardWallets>`
  border-radius: 12px;
  padding: 8px 12px;
  cursor: pointer;
  width: 100%;
  background: white;
  border: none;

  h3 {
    color: ${({ theme }) => theme.font.color.default};
    font-weight: 500;
  }
  ${({ selected, theme }) =>
    selected
      ? css`
          background: ${theme.palette.grey[100]};
          h3 {
            color: ${theme.palette.primary.main};
          }
        `
      : css``}

  &:hover {
    background-color: ${({ theme }) => theme.palette.grey[100]};
  }
`;

export const BodyItem = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Circle = styled.div<{ color: string }>`
  background: ${({ theme, color }) => theme.palette[color || 'primary'][500]};
  width: 12px;
  height: 12px;
  padding: 8px;
  border-radius: 50%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
