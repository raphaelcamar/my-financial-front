import styled from 'styled-components';
import { Paper } from '@/core/ui/components/atoms';

export const StyledPaper = styled(Paper)`
  background: ${({ theme }) => theme.palette.primary.main};
  height: 138px;
`;
