import styled from 'styled-components';
import { ITd } from '.';

export const StyledTd = styled.td<ITd>`
  font-weight: 400;
  display: table-cell;
  vertical-align: inherit;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  text-align: left;
  padding: 16px;
  max-width: ${({ width }) => (width ? `${width}px` : 'auto')};
`;
