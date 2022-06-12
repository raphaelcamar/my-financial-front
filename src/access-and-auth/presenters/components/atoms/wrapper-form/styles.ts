import styled from 'styled-components';

export const Container = styled.div`
  padding: 52px 86px;

  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    padding: 36px 52px;
  }
`;
