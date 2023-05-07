import styled, { css } from 'styled-components';

type ItemProps = {
  selected?: boolean;
  isLastItem?: boolean;
  length: number;
  firstItem?: boolean;
};

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TabItems = styled.div``;

const getRadiusByPosition = (firstItem: boolean, lastItem: boolean) => {
  if (firstItem) return ' 9px 0 0 0';

  if (lastItem) return ' 0 9px 0 0';

  return ' 0 0 0 0';
};

export const Item = styled.button<ItemProps>`
  width: ${({ length }) => `calc(100% / ${length})`};
  border: none;
  border-radius: ${({ isLastItem, firstItem }) => getRadiusByPosition(firstItem, isLastItem)};
  border-bottom: 2px solid ${({ theme, selected }) => (selected ? theme.palette.primary[500] : 'none')};
  color: ${({ theme, selected }) => (selected ? theme.palette.primary[500] : theme.font.color.default)};
  background: ${({ theme, selected }) => (selected ? theme.palette.grey[200] : 'transparent')};
  padding: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all ease 0.3s;
  &:hover {
    background: ${({ theme }) => theme.palette.grey[200]};
    color: ${({ theme }) => theme.palette.primary[500]};
  }
`;

export const TabContainer = styled.div`
  width: 100%;
`;
