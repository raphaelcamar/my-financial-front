import styled from 'styled-components';

type OptionProps = {
  selected?: boolean;
};

export const Container = styled.div`
  max-width: 100%;
  width: 100%;
`;

export const Options = styled.div`
  display: flex;
  overflow: auto;
  padding: 8px 0;
  gap: 8px;
`;

export const Option = styled.button<OptionProps>`
  background: ${({ theme }) => theme.palette.grey[100]};
  transition: all ease 0.2s;
  padding: 12px 18px;
  border-radius: 12px;
  width: 100%;
  white-space: pre;
  cursor: pointer;
  font-weight: 600;
  color: ${({ theme, selected }) => (selected ? `${theme.palette.primary[500]}` : `${theme.font.color.default}`)};

  &:hover {
    background: ${({ theme }) => theme.palette.grey[200]};
  }

  border: ${({ theme, selected }) =>
    selected ? `1px solid ${theme.palette.primary[500]}` : `1px solid ${theme.palette.grey[200]}`};
`;
