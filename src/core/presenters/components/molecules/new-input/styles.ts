import styled from 'styled-components';
import { IInputNew } from '.';

export const BaseInput = styled.input`
  all: unset;
  height: 100%;
  width: 100%;

  &::-webkit-autofill {
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

export const ContainerInput = styled.div<IInputNew>`
  height: 46px;
  border: 1px solid ${props => (props.disabled ? props.theme.palette.grey[300] : props.theme.palette.grey[400])};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 18px;
  border-radius: 12px;
  transition: all ease-out 0.3s;
  &:focus-within {
    border: 1px solid
      ${props => (props?.variant ? props.theme.palette?.[props.variant]?.main : props.theme.palette?.primary.main)};
  }
`;
