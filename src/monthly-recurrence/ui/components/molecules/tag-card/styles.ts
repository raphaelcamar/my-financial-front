import styled from 'styled-components';
import { Paper } from '@/core/ui/components/atoms';

export const StyledPaper = styled(Paper)`
  height: 170px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BodyModalDelete = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;

  & > div {
    p {
      margin-bottom: 8px;
    }
  }
`;

export const WrapperModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;

  & button:last-child {
    width: 100%;
  }
`;

export const LineItem = styled.div`
  padding: 4px;
  border-radius: 4px;
  background: ${({ theme }) => theme.palette.grey[200]};
`;

export const PaperItemLinked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: 400px;
  overflow-x: auto;
`;
