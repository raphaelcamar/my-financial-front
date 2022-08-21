import styled from 'styled-components';

type ContainerType = {
  open?: boolean;
};

export const Container = styled.div<ContainerType>`
  position: fixed;
  opacity: ${({ open }) => (open ? 1 : 0)};
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  z-index: ${({ open }) => (open ? 10 : -1000)};
  background: #1a1a1aa2;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalWrapper = styled.div<ContainerType>`
  transition: all 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
`;
