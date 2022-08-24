import styled, { css } from 'styled-components';

type FigureType = {
  side: 'left' | 'right';
};

export const defineSide = (side: 'left' | 'right') =>
  side === 'left'
    ? css`
        left: 40%;
      `
    : css`
        right: 40%;
      `;

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

export const Figure = styled.div<FigureType>`
  position: fixed;
  ${({ side }) => defineSide(side)}
  height: 100vh;
  width: 60%;
  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    display: none;
  }
`;
