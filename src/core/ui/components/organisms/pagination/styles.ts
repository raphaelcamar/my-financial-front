import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperButtons = styled.div`
  display: flex;
  gap: 12px;
`;

export const StyledIconButton = styled.button`
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.grey[200]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  transition: all ease 0.2s;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }

  &:disabled {
    cursor: inherit;
    transform: scale(1);
    filter: contrast(0.9);
  }
`;
