import styled, { css } from 'styled-components';
import { CircularProgress } from '@/core/ui/components/atoms';

type ContainerType = {
  src?: string;
  size?: number;
  open?: boolean;
};

export const Container = styled.div<ContainerType>`
  width: ${({ size }) => size || '30'}px;
  height: ${({ size }) => size || '30'}px;
  border-radius: 50%;
  background-image: ${({ src }) => `url(${src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Letter = styled.div<ContainerType>`
  color: ${({ theme }) => theme.palette.primary.main};
  background: ${({ theme }) => theme.palette.primary[50]};
  width: ${({ size }) => size || '30'}px;
  height: ${({ size }) => size || '30'}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: 700;
`;

export const WrapperAvatar = styled.div<ContainerType>`
  position: relative;
`;

export const ChooseAvatar = styled.label<ContainerType>`
  all: unset;
  cursor: pointer;
  & input {
    display: none;
  }
  width: ${({ size }) => size || '30'}px;
  height: ${({ size }) => size || '30'}px;
  border-radius: 50%;
  background-image: ${({ src }) => `url(${src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  background: #00000070;
  top: 0;
  align-items: center;
  justify-content: center;

  ${({ open }) =>
    open
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}
`;

export const StyledCircularProgress = styled(CircularProgress)`
  z-index: 5;
`;
