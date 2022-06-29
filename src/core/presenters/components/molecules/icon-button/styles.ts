import styled, { css } from 'styled-components';
import { ColorProps, VariantProps } from '@/main/styled';

type ContainerType = {
  color: keyof ColorProps;
  shade: keyof VariantProps;
};

const getBackgroundColor = (color: keyof ColorProps, shade: keyof VariantProps) => css`
  background: ${({ theme }) => theme.palette[color][shade]};
`;

export const Container = styled.div<ContainerType>`
  padding: 12px;
  border-radius: 50%;
  transition: all ease 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ color, shade }) => getBackgroundColor(color, shade)}
  cursor: pointer;
  box-shadow: 0px 0 0px 0px rgb(0 0 0 / 20%), 0px 0px 2px 0px rgb(0 0 0 / 14%), 0px 0px 6px 1px rgb(0 0 0 / 12%);

  &:hover {
    border-radius: 12px;
  }

  &:active {
    transform: scale(0.9);
  }
`;
