import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const FilterSearch = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
`;
