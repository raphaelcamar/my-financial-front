import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Flag = styled.div`
  width: 155px;
  background: ${({ theme }) => theme.palette.primary.main};
`;

export const TextEllipsis = styled.div`
  width: 100%;
  flex: 1;
`;
