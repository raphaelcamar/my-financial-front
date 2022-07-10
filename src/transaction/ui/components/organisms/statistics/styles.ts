import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 46px;

  @media (${({ theme }) => theme.breakpoints.down('xl')}) {
    flex-direction: column;
  }
`;
