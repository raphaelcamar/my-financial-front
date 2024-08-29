import styled from 'styled-components';
import { Button, Input } from '@/core/ui/components/molecules';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    flex-direction: column;
  }
`;

export const GroupFilter = styled.form`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    flex-direction: column;
    width: 100%;

    div {
      width: 100%;
    }
  }
`;

export const StyledInput = styled(Input)`
  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    width: 100%;
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 24px;
  width: 25%;

  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    width: 100%;
  }
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

  &:disabled {
    cursor: inherit;
    transform: scale(1);
  }
`;
