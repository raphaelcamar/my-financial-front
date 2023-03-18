import styled from 'styled-components';

export const WrapperIconButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const WrapperRevenue = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  display: flex;
  height: 46px;
  align-items: center;
`;

export const ReadonlyInput = styled.input`
  border: none;
  &:focus {
    border: none;
  }
  color: ${({ theme }) => theme.font.color.default};
  font-size: 16px;
  border-radius: 12px 0 0 12px;
  height: 100%;
  padding: 0 12px;
`;

export const WrapperIcon = styled.button`
  border: none;
  padding: 0 8px;
  cursor: pointer;
  border-radius: 0 12px 12px 0;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.grey[100]};
`;
