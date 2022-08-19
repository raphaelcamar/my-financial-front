import styled from 'styled-components';
import { Paper } from '@/core/ui/components/atoms';

export const StyledPaper = styled(Paper)`
  height: 170px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Pelicule = styled.div`
  z-index: 1;
  background: rgba(255, 255, 255, 0.65);
`;

export const TagCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;

  @media (${({ theme }) => theme.breakpoints.down('lg')}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (${({ theme }) => theme.breakpoints.down('sm')}) {
    grid-template-columns: 1fr;
  }
`;
