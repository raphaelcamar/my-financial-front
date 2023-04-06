import styled from 'styled-components';

export const IconIndicator = styled.span`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: 4px;
  display: flex;
  align-items: center;
  width: 28px;
  height: 28px;
  justify-content: center;
`;

export const Row = styled.tr`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr;
  border-radius: 8px;
  gap: 4px;
  background: ${({ theme }) => theme.palette.grey[100]};
`;

export const FirstRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const WrapperActionTableButtons = styled.div`
  display: flex;
  gap: 8px;
`;
