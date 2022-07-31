import styled from 'styled-components';
import { Button } from '@/core/ui/components/molecules';

export const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-grow: 1;
  flex-shrink: 3;
  flex-basis: 150px;
`;

export const StyledButton = styled(Button)`
  width: 50%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media (${({ theme }) => theme.breakpoints.down('sm')}) {
    flex-direction: column;
    gap: 16px;
    justify-content: center;
  }
`;

export const Information = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
`;
