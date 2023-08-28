import styled, { css } from 'styled-components';
import { ColorProps, VariantProps } from '@/main/styled';

type ContainerType = {
  color: keyof ColorProps;
  shade: keyof VariantProps;
  padding?: [number, number];
  noBackground?: boolean;
};

const getBackgroundColor = (color: keyof ColorProps, shade: keyof VariantProps, noBackground?: boolean) => css`
  background: ${({ theme }) => (noBackground ? 'transparent' : theme.palette[color][shade])};
`;

export const Container = styled.button<ContainerType>`
  all: unset;
  ${({ padding }) =>
    padding?.length > 0
      ? css`
          padding: ${padding?.[0]}px ${padding?.[1]}px;
        `
      : css`
          padding: 12px;
        `}
  border-radius: 50%;
  transition: all ease 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ color, shade }) => getBackgroundColor(color, shade)}
  cursor: pointer;
  background: ${({ noBackground }) => (noBackground ? 'transparent' : 'none')};
  box-shadow: ${({ noBackground }) =>
    noBackground
      ? 'none'
      : '0px 0 0px 0px rgb(0 0 0 / 20%), 0px 0px 2px 0px rgb(0 0 0 / 14%), 0px 0px 6px 1px rgb(0 0 0 / 12%);'};

  &:hover {
    border-radius: 12px;
    box-shadow: ${({ noBackground }) =>
      noBackground
        ? 'none'
        : '0px 0 0px 0px rgb(0 0 0 / 20%), 0px 0px 2px 0px rgb(0 0 0 / 14%), 0px 0px 6px 1px rgb(0 0 0 / 12%);'};
  }

  &:active {
    transform: scale(0.9);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.palette.grey[300]};
    border-radius: 50%;
    cursor: pointer;

    &:active {
      transform: scale(1);
    }
  }
`;
