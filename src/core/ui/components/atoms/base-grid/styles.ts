import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2.2fr 0.9fr;
  gap: 42px;

  @media (${({ theme }) => theme.breakpoints.down('lg')}) {
    grid-template-columns: 1fr;
  }
`;
