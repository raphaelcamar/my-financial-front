import styled from 'styled-components';

export const Input = styled.input`
  all: unset;
  height: 100%;
  width: 100%;

  &::-webkit-autofill {
    -webkit-box-shadow: 0 0 0 40px white inset !important;
    box-shadow: 0 0 0 40px white inset !important;
  }

  &:autofill {
    -webkit-box-shadow: 0 0 0 40px white inset !important;
    box-shadow: 0 0 0 40px white inset !important;
  }

  &::placeholder {
    color: ${props => props.theme.palette.grey[700]};
  }

  &:disabled {
    color: ${props => props.theme.palette.grey[400]};

    &::placeholder {
      color: ${props => props.theme.palette.grey[400]};
    }
  }
`;
