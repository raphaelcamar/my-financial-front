import styled from 'styled-components';
import { Paper } from '@/core/ui/components/atoms';

export const StyledPaper = styled(Paper)`
  height: 173px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.palette.grey[200]};
  }
`;
