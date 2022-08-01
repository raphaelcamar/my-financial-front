import styled from 'styled-components';
import { Button } from '@/core/ui/components/molecules';
import { HelperText } from '@/core/ui/components/atoms';

type TableActionsType = {
  hasHelperText?: boolean;
};

export const Container = styled.form<TableActionsType>`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  width: 100%;

  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`;

export const FilterSearch = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
`;

export const WrapperButton = styled.div<TableActionsType>`
  /* width: 50%; */
  height: 100%;
  display: flex;
  justify-content: baseline;
  align-items: center;
  margin-top: 10px;
  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    width: 100%;

    & > button {
      flex-grow: 1;
    }
  }
`;

export const StyledInputMask = styled.div`
  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    width: 100%;
    flex-grow: 1;
  }
`;

export const StyledButton = styled(Button)<TableActionsType>`
  width: 30%;
  margin-top: ${({ hasHelperText }) => (hasHelperText ? '4px' : '22px')};
`;

export const ModalAddButton = styled(Button)<TableActionsType>`
  min-width: 250px;
  margin-top: ${({ hasHelperText }) => (hasHelperText ? '4px' : '22px')};
  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    width: 100%;
    min-height: 46px;
    margin-bottom: 0;
  }
`;
