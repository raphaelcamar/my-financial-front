import styled, { css } from 'styled-components';

export const Container = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.25rem;
  height: 1.25rem;
  border: 0.1rem solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 4px;
  display: grid;
  place-content: center;

  &::before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    ${({ checked }) =>
      checked
        ? css`
            transform: scale(1);
          `
        : css`
            transform: scale(0);
          `};
    transition: transform ease-in-out 0.2s;
    box-shadow: inset 1em 1em
      ${({ theme, checked }) => (checked ? theme.palette.primary.main : theme.palette.grey[200])};
    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }
`;
