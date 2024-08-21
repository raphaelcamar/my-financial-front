import styled from 'styled-components';
import { Button } from '@/core/ui/components/molecules';

export const Container = styled.form``;

export const WrapperButtons = styled.div`
  width: 100%;
  display: flex;
  button {
    width: 100%;
  }
  gap: 24px;
  margin-top: 36px;
`;

export const StyledButton = styled(Button)`
  width: 25%;
`;

export const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const WrapperTwoFields = styled.div`
  display: grid;
  grid-template-columns: 6fr 6fr;
  gap: 36px;
`;

export const BodyFields = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  height: 65vh;
  overflow: auto;
`;
