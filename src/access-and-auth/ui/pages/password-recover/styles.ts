import styled from 'styled-components';

export const Root = styled.div`
  background: ${({ theme }) => theme.palette.background.default};
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;

  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    flex-direction: column;
  }
`;

export const Form = styled.div`
  width: 40%;
  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    width: 100%;
  }
`;

export const Figure = styled.div`
  position: fixed;
  height: 100vh;
  width: 60%;
  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    display: none;
  }
`;
