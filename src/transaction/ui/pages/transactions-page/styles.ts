import styled from 'styled-components';

const SPACING_DEFAULT = 46;

export const Container = styled.div`
  display: grid;
  gap: 46px;
`;

export const FirstLine = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: ${SPACING_DEFAULT}px;

  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    grid-template-columns: auto;
  }
`;

export const SecondLine = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: ${SPACING_DEFAULT}px;
  /* max-width: 100%; */

  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    grid-template-columns: auto;
  }
`;

export const Space = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  overflow-x: auto;
`;
