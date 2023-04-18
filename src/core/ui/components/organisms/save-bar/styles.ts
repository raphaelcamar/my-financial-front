import styled from 'styled-components';

export const Container = styled.div<{ isOpen: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  margin: auto;
  max-width: max-content;
  transition: all 225ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  bottom: ${({ isOpen }) => (isOpen ? '36px' : '-100%')};
  z-index: 5;
`;

export const WrapperSaveBar = styled.div`
  border-radius: 16px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  width: fit-content;
`;
