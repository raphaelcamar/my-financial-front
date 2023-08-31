import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.palette.grey[100]};
  border-radius: 8px;
  display: flex;
  align-items: center;
`;

export const BorderLine = styled.div`
  width: 8px;
  height: 100%;
  border-radius: 8px 0 0 8px;
  height: 58px;
  background: ${({ theme }) => theme.palette.primary[500]};
`;

export const WrapperInfos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  padding: 0 12px;
`;

export const TitleAndLinkedItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const WrapperActionButtons = styled.div<{ showButton?: boolean }>`
  display: flex;
  gap: 8px;
  align-items: center;
  transform: scale(0);
  transition: all ease 0.1s;

  ${({ showButton }) => (showButton ? 'transform: scale(1)' : 'transform: scale(0)')}
`;
