import styled, { keyframes } from 'styled-components';
import { TypographyStyle } from '@/core/ui/components/atoms/typography/styles';
import { getRestPercentage } from '@/user/utils';
import { Button } from '@/core/ui/components/molecules';

const THREE_MINUTES = 1000 * 60 * 3;

type Test = {
  width: number;
};

const FadeInAnimation = keyframes`  
  from { width: 0%; }
  to { width: 100%; }
`;

export const CountdownWrapper = styled.div<Test>`
  width: ${({ width }) => `${getRestPercentage(THREE_MINUTES, width)}%`};
  animation-name: ${FadeInAnimation};
  transition: all linear 0.3s;
  height: 100%;
  border-radius: 8px;
  background: ${({ theme }) => theme.palette.primary.main};
`;

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.palette.primary[50]};
  height: 17px;
  border-radius: 8px;
`;

export const StyledTypography = styled(TypographyStyle)`
  color: ${({ theme }) => theme.palette.grey[400]};
  text-align: end;
`;

export const StyledButton = styled(Button)`
  width: 117px;
`;

export const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 36px;
`;
