import styled from 'styled-components';
import { Input } from '@/core/ui/components/molecules';

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;

  & > div {
    width: 100%;
  }
`;

export const StyledInput = styled(Input)`
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  /* width: 50%; */

  & button {
    width: 25%;
  }
`;
