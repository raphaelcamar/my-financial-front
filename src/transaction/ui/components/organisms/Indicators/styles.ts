import styled from 'styled-components';
import { ColorProps } from '@/main/styled';

export const Container = styled.div`
  display: flex;
  gap: 36px;

  @media (${({ theme }) => theme.breakpoints.down('xl')}) {
    flex-direction: column;
  }
`;

export const Highlight = styled.span<{ color: keyof ColorProps }>`
  color: ${({ theme, color }) => theme.palette[color][500]};
`;
