import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;

  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    justify-content: center;
  }
`;
