import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-height: 500px;
  border: 1px solid ${({ theme }) => theme.palette.grey[200]};
  border-radius: 16px;
  overflow-x: auto;
`;
