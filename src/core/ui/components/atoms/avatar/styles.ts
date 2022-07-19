import styled from 'styled-components';

type ContainerType = {
  src?: string;
  size?: number;
};

export const Container = styled.div<ContainerType>`
  width: ${({ size }) => size || '36'}px;
  height: ${({ size }) => size || '36'}px;
  border-radius: 50%;
  background-image: ${({ src }) => `url(${src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Letter = styled.div<ContainerType>`
  color: ${({ theme }) => theme.palette.primary.main};
  background: ${({ theme }) => theme.palette.primary[50]};
  width: ${({ size }) => size || '36'}px;
  height: ${({ size }) => size || '36'}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: 700;
`;
