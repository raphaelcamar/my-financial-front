import styled from 'styled-components';
import { Button, Input } from '@/core/ui/components/molecules';
import { ColorProps } from '@/main/styled';

type ModalCreateTag = {
  color: keyof ColorProps;
};

export const ChoiceColors = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  max-height: 100px;
  overflow: auto;
`;

export const Circle = styled.div<ModalCreateTag>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ theme, color }) => theme.palette?.[color][500]};

  &:hover {
    cursor: pointer;
    background: ${({ theme, color }) => theme.palette?.[color][700]};
  }
`;

export const WrapChoicedColor = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const WrapperModal = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 24px;
`;

export const StyledButton = styled(Button)`
  width: 50%;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 16px;
`;

export const StyledInput = styled(Input)`
  min-width: 250px;

  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    min-width: 200px;
  }

  @media (${({ theme }) => theme.breakpoints.down('sm')}) {
    width: 100%;
  }
`;

export const ColorTitle = styled.div`
  display: flex;
  gap: 24px;

  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    flex-direction: column;
  }
`;
