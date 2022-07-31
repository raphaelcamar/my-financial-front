import styled from 'styled-components';
import { Button } from '@/core/ui/components/molecules';
import { CircularProgress } from '@/core/ui/components/atoms';

export const BodyContent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 28px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;

export const SubmitButton = styled(Button)`
  width: 100%;
`;

export const Progress = styled(CircularProgress)`
  margin-right: 4px;
`;

export const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 48px;
`;
