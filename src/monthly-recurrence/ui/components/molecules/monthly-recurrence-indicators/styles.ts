import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const IndicatorItem = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.palette.grey[200]};
  border-radius: 8px;
  height: 74px;
`;

export const LeftInformations = styled.div`
  display: flex;
  gap: 12px;
`;

export const WrapperTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
