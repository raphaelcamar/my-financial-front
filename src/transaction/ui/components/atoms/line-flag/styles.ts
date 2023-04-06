import styled from 'styled-components';
import { ILineFlag } from '.';

export const Line = styled.span<ILineFlag>`
  width: 6px;
  height: 100%;
  background: ${({ theme, color }) => theme.palette[color][400]};
  border-radius: 8px 0 0 8px;
  min-height: 62px;
`;
