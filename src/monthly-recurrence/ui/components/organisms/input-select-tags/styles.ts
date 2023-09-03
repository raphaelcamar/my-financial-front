import styled from 'styled-components';
import { ColorProps, Shade } from '@/main/styled';
import { Button } from '@/core/ui/components/molecules';

export const SelectTagsButton = styled.button`
  height: 46px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  background: #ffffff;
  padding: 0 12px;
  transition: all ease-out 0.3s;
  border-radius: 8px;
  cursor: pointer;

  border: 1px solid ${({ theme }) => theme.palette.grey[300]};
  -webkit-box-shadow: 0px 0 3px 0px ${({ theme }) => theme.palette.grey[300]};
  -moz-box-shadow: 0px 0 3px 0px ${({ theme }) => theme.palette.grey[300]};
  box-shadow: 0px 0 3px 0px ${({ theme }) => theme.palette.grey[300]};
  &:focus-within {
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
    -webkit-box-shadow: 0px 0 3px 0px ${({ theme }) => theme.palette.primary.main};
    -moz-box-shadow: 0px 0 3px 0px ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0px 0 3px 0px ${({ theme }) => theme.palette.primary.main};
  }
`;

export const WrapperInputTag = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

export const WrapperTagInfos = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const TagCircle = styled.div<{ hasNoMargin?: boolean; bgColor: keyof ColorProps; shade: Shade }>`
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background-color: ${({ theme, bgColor, shade }) => theme.palette[bgColor][shade]};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  margin-left: ${({ hasNoMargin }) => (hasNoMargin ? '' : '-20px')};
`;

export const WrapperCircles = styled.div`
  display: flex;
  gap: 8px;
`;

export const NameLimit = styled.div`
  max-width: 30%;
`;

export const WrapperModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const WrapperTags = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  overflow: auto;
`;

export const WrapperButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 24px;
`;

export const StyledButton = styled(Button)`
  width: 25%;
`;
