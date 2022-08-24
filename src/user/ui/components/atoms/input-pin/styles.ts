import styled from 'styled-components';

export const StyledInput = styled.input`
  all: unset;
  width: 100%;
  height: 100%;
  margin-left: 22px;
  color: ${({ theme }) => theme.palette.grey[600]};
`;

export const ContainerInputPin = styled.div`
  min-height: 150px !important;
  width: 82px;
  background: ${({ theme }) => theme.palette.grey[200]};
  border-radius: 8px;
  font-size: 64px;
  display: flex;
  align-items: center;
  justify-self: center;
  justify-content: center;
  &:focus-within {
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
  }
`;
