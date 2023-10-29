import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  overflow: auto;

  @media (${({ theme }) => theme.breakpoints.down('lg')}) {
    min-width: auto;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    min-width: auto;
    grid-template-columns: 1fr 1fr;
  }

  @media (${({ theme }) => theme.breakpoints.down('sm')}) {
    min-width: auto;
    grid-template-columns: 1fr;
  }
`;

export const EmptyMonthlyRecurrences = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
