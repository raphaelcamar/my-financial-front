import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 48px;
  flex-direction: column;
`;

export const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (${({ theme }) => theme.breakpoints.down('sm')}) {
    flex-direction: column;
    gap: 48px;
  }
`;

export const TagCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;

  @media (${({ theme }) => theme.breakpoints.down('lg')}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (${({ theme }) => theme.breakpoints.down('sm')}) {
    grid-template-columns: 1fr;
  }
`;
