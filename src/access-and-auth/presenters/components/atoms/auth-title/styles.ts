import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    text-align: center;
  }
`;
