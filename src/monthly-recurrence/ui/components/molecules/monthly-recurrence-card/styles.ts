import styled from 'styled-components';

export const ContainerCard = styled.div`
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.palette.grey[300]};
  transition: all ease 0.1s;
  width: 100%;
  min-height: 240px;
  background: ${({ theme }) => theme.palette.background.paper};
  padding: 22px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WrapperHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterCard = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
`;

export const IconWithInfo = styled.div<{ isPayed?: boolean }>`
  display: flex;
  gap: 6px;
  align-items: center;
  text-decoration: ${({ isPayed }) => (isPayed ? 'line-through' : '')};
  text-decoration-color: ${({ theme }) => theme.palette.grey[600]};
`;

export const DataAndTags = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MultiTags = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: transparent;
  border: none;
  transition: all ease 0.2s;

  &:active {
    transform: scale(0.9);
  }
`;

export const TagItem = styled.div<{ hasNoMargin?: boolean }>`
  margin-left: ${({ hasNoMargin }) => (hasNoMargin ? '' : '-11px')};
`;

export const PlusItemBall = styled.div`
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.palette.primary[500]};
  font-size: 8px;
  height: 18px;
  width: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: bold;
  margin-left: -8px;
`;
