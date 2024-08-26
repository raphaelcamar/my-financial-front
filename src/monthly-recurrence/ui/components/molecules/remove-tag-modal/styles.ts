import styled from 'styled-components';
import { Button } from '@/core/ui/components/molecules';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const WrapperAnotations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const WrapperOtherInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Color = styled.circle<{ color: string; shade: number }>`
  background: ${({ theme, color, shade }) => theme.palette[color][shade || 500]} !important;
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

export const WrapperButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 24px;
  margin-top: 36px;
`;

export const StyledButton = styled(Button)`
  width: 50%;
`;
