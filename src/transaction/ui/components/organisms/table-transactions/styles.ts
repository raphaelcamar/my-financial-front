import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  max-height: 650px;
  overflow: auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: ${({ theme }) => theme.palette.background.paper};
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
  grid-template-columns: 0.7fr 3.1fr 1fr 1fr 1fr 1fr;

  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    display: none;
  }
`;

export const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
