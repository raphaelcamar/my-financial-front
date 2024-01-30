import styled from 'styled-components';
import { Button } from '@/core/ui/components/molecules';

export const ModalContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 500px;
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ColoredBall = styled.button<{ color: string }>`
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: all ease 0.2s;
  background: ${({ color }) => color};
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;

export const ColorItems = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  padding: 12px;
  width: 100%;
`;

export const WrapperButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 24px;
  margin-top: 36px;
`;

export const StyledButton = styled(Button)`
  width: 25%;
`;
