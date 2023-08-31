import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 48px;
  flex-direction: column;
`;

export const Filter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MonthlyCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
`;

export const WrapperleftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
`;
