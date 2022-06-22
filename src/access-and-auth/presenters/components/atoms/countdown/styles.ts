import styled from 'styled-components';
import { TypographyStyle } from '@/core/presenters/components/atoms/typography/styles';
import { THREE_MINUTES } from '.';
import { getRestPercentage } from '@/access-and-auth/presenters/utils';
import { Button } from '@/core/presenters/components/molecules';

type Test = {
  width: number;
};

export const CountdownWrapper = styled.div<Test>`
  width: ${({ width }) => `${getRestPercentage(THREE_MINUTES, width)}%`};
  height: 100%;
  transition: width ease 0.3s;
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
