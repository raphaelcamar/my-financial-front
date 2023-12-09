import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledIconButton = styled.button`
  border: none;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.palette.grey[200]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  transition: all ease 0.2s;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;

export const WrapperTagItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-height: calc(40vh - (66px));
  overflow: auto;
  padding: 0 4px 0 0;
`;

export const WrapperTagList = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
`;

export const WrapperSkeletons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const ModalContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
