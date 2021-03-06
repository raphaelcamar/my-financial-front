import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

type AccordionItemType = {
  selected?: boolean;
  accordionOpen?: boolean;
  open?: boolean;
  withFullRadius?: boolean;
};

const selectItemStyles = selected =>
  selected &&
  css`
    background: ${({ theme }) => theme.palette.primary.main};
    &:hover {
      background: ${({ theme }) => theme.palette.primary.main};
    }
  `;

const containerOpen = (open?: boolean) =>
  open
    ? css`
        border-radius: 8px;
      `
    : css`
        border-radius: 0 0 8px 8px !important;
        justify-content: center;
      `;

export const Container = styled(Link)<AccordionItemType>`
  border-radius: 8px;
  padding: 8px 16px;
  text-decoration: none;
  min-height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  &:hover {
    background: ${({ theme }) => theme.palette.primary[50]};
  }
  color: ${({ theme }) => theme.font.color.default};
  ${({ selected }) => selectItemStyles(selected)}
  ${({ open }) => containerOpen(open)}
  ${({ withFullRadius }) =>
    withFullRadius &&
    css`
      border-radius: 8px !important;
    `}
`;

export const WrapperIcon = styled.div<AccordionItemType>`
  display: flex;
  align-content: center;
  ${({ theme, selected, open }) =>
    selected &&
    !open &&
    css`
      background: ${theme.palette.grey[50]};
      border-radius: 4px;
      padding: 12px;
    `}
`;

export const WrapperIconText = styled.div<AccordionItemType>`
  display: flex;
  gap: 16px;
  align-items: center;

  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    display: flex;
    justify-content: center;
  }
`;
