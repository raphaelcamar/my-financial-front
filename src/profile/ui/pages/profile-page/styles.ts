import styled from 'styled-components';
import { InputBase } from '@/core/ui/components/atoms';

export type SpaceInputsType = {
  grid: string;
};

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const StyledInputBase = styled(InputBase)`
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey[300]};
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 40px;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.font.color.grey};
`;

export const SpaceInputs = styled.div<SpaceInputsType>`
  display: grid;
  grid-template-columns: ${({ grid }) => grid};
  gap: 12px;
`;
