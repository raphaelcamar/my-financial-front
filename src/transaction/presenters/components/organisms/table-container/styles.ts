import styled from 'styled-components';
import { Button } from '@/core/presenters/components/molecules';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24;
`;

export const WrapperActionTableButtons = styled.div`
  display: flex;
  gap: 8px;
`;

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
