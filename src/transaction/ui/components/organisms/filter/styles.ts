import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (${({ theme }) => theme.breakpoints.down('xl')}) {
    flex-direction: column;
    gap: 46px;
    width: 100%;
  }
`;
