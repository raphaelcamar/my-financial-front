import styled from 'styled-components';
import { IChip } from '.';

export const ContainerChip = styled.div<IChip>`
  width: ${({ width }) => (width ? `${width}px` : '77px')};
  background: ${({ color, theme }) => theme.palette[color][100]};
  border-radius: 4px;
  text-align: center;
`;
