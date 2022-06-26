import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

type AccordionItemType = {
  selected: boolean;
};

const selectItemStyles = selected =>
  selected &&
  css`
    background: ${({ theme }) => theme.palette.primary.main};
    &:hover {
      background: ${({ theme }) => theme.palette.primary.main};
    }
  `;

export const Container = styled(Link)<AccordionItemType>`
  border-radius: 8px;
  padding: 8px 16px;
  text-decoration: none;
  color: ${({ theme }) => theme.font.color.default};
  min-height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  &:hover {
    background: ${({ theme }) => theme.palette.primary[50]};
  }

  ${({ selected }) => selectItemStyles(selected)}
`;
