import styled from 'styled-components';

export const StyledTh = styled.th`
  font-weight: 500;
  display: table-cell;
  vertical-align: inherit;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  text-align: left;
  padding: 16px;
  position: sticky;
  top: 0;
  z-index: 2;
  background: #fafafa;

  &:hover {
    background: ${({ theme }) => theme.palette.grey[100]};
    cursor: pointer;
  }
`;
