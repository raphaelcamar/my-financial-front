import styled from 'styled-components';
import { Paper } from '@/core/ui/components/atoms';

export const Title = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledPaper = styled(Paper)`
  height: 173px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;
