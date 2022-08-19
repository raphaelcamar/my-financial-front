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

export const Container = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: row;

  @media (${({ theme }) => theme.breakpoints.down('xs')}) {
    flex-direction: column;
    gap: 16px;
    width: 100%;

    & button {
      width: 100%;
    }
  }
`;
