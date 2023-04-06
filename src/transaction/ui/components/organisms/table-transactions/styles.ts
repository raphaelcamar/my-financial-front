import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  max-height: 650px;
  overflow: auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); ;
`;

export const HeaderTable = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BodyTable = styled.tbody`
  display: flex;
  gap: 36px;
  flex-direction: column;
`;

export const THead = styled.thead`
  display: table-header-group;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr;
`;

export const Row = styled.tr`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr;
  border-radius: 8px;
  background: ${({ theme }) => theme.palette.grey[100]};
`;

export const Line = styled.span`
  width: 6px;
  height: 100%;
  background: ${({ theme }) => theme.palette.error[400]};
  border-radius: 8px 0 0 8px;
  height: 62px;
`;

export const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

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

export const FirstRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const WrapperActionTableButtons = styled.div`
  display: flex;
  gap: 8px;
`;
