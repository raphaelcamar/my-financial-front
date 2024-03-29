import styled from 'styled-components';
import { Paper } from '@/core/ui/components/atoms';

export const StyledPaper = styled(Paper)`
  height: 170px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr 6fr;
  align-items: center;
`;
