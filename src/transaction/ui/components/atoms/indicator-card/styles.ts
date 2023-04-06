import styled from 'styled-components';
import { IIndicatorCard } from '.';

export const Container = styled.div<Partial<IIndicatorCard>>`
  border-radius: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ type }) =>
    `linear-gradient(318.68deg, #ffffff 49.91%, ${type === 'ENTRANCE' ? '#039855' : '#F04438'} 210.12%);`};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Spacer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const PercentIndicator = styled.div`
  border-radius: 24px;
  padding: 4px;
  background: ${({ theme }) => theme.palette.success[100]};
  display: flex;
  gap: 8px 4px;
`;
