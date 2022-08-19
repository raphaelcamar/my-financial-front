import styled from 'styled-components';

export const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (${({ theme }) => theme.breakpoints.down('sm')}) {
    flex-direction: column;
    gap: 48px;
  }
`;
