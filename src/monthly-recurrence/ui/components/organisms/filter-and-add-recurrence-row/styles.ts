import styled from 'styled-components';
import { Button } from '@/core/ui/components/molecules';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GroupFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const StyledButton = styled(Button)`
  margin-top: 24px;
  width: 25%;
`;

export const StyledIconButton = styled.button`
  border: none;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.palette.grey[200]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  transition: all ease 0.2s;
  cursor: pointer;
  margin-top: 24px;

  &:active {
    transform: scale(0.9);
  }
`;
