import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: ${({ theme }) => theme.palette.background.paper};
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const HeaderTable = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BodyTable = styled.table`
  max-height: 50px;
  overflow: auto;
`;

export const WrapperSkeletons = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
`;

export const THead = styled.thead`
  display: table-header-group;
  display: grid;
  grid-template-columns: 0.7fr 3.1fr 1fr 1fr 1fr 1fr;

  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    display: none;
  }
`;

export const WrapperBody = styled.tr`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Td = styled.td`
  display: flex;
  justify-content: center;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  max-height: 550px;
  overflow: auto;
  padding-right: 8px;
`;
