import styled from 'styled-components';

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
