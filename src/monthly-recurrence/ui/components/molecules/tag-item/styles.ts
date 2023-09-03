import styled from 'styled-components';

export const Container = styled.div<{ selected?: boolean; isSelectable: boolean }>`
  background: ${({ theme }) => theme.palette.grey[100]};
  border-radius: 8px;
  display: flex;
  align-items: center;
  transition: all ease 0.2s;
  transform: ${({ selected }) => (selected ? 'scale(0.9)' : '')};
  ${({ isSelectable }) => (isSelectable ? 'cursor: pointer' : '')}
`;

export const BorderLine = styled.div<{ color: string; shade: string }>`
  width: 8px;
  height: 100%;
  border-radius: 8px 0 0 8px;
  height: 58px;
  background: ${({ theme, color, shade }) => theme.palette[color][shade]};
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
