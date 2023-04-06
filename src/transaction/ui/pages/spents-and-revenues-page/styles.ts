import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1.1fr;
  gap: 42px;

  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    grid-template-columns: 1fr;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (${({ theme }) => theme.breakpoints.down('xl')}) {
    flex-direction: column;
    gap: 46px;
    width: 100%;
  }
`;

export const Indicators = styled.div`
  display: flex;
  gap: 36px;

  @media (${({ theme }) => theme.breakpoints.down('xl')}) {
    flex-direction: column;
  }
`;

export const WrapperGridItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
`;
