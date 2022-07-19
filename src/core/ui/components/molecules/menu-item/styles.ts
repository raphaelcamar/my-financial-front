import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 8px;
  height: 24px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 16px 8px;
  align-items: center;
  color: ${({ theme }) => theme.palette.grey[500]};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.palette.grey[200]};
  }
`;
