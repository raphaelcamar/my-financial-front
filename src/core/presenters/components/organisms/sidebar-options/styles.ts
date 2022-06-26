import styled from 'styled-components';
import { TypographyStyle } from '@/core/presenters/components/atoms/typography/styles';

export const ItemSidebar = styled.div`
  margin-bottom: 16px;
`;

export const WrapperIconText = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    display: flex;
    justify-content: center;
  }
`;

export const StyledTypography = styled(TypographyStyle)`
  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    display: none;
  }
`;

export const Line = styled.div`
  border-left: 1px solid ${({ theme }) => theme.palette.grey[50]};
  margin: 8px 0px 8px 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-left: 12px;
`;
