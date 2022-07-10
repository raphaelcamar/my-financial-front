import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 46px;

  @media (${({ theme }) => theme.breakpoints.down('lg')}) {
    grid-template-columns: auto;
  }
`;
