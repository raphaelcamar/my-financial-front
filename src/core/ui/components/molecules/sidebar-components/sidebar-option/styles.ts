import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

type AccordionItemType = {
  selected?: boolean;
  accordionOpen?: boolean;
  open?: boolean;
  withFullRadius?: boolean;
  isLastItem?: boolean;
  soon?: boolean;
};

const selectItemStyles = selected =>
  selected &&
  css`
    background: ${({ theme }) => theme.palette.grey[200]};
    &:hover {
      background: ${({ theme }) => theme.palette.grey[200]};
    }
  `;

const containerOpen = (open?: boolean, isLastItem?: boolean) =>
  open
    ? css`
        border-radius: 8px;
      `
    : css`
        border-radius: ${isLastItem ? '0 0 8px 8px !important' : '0px 0px 0px 0px !important'};
        justify-content: center;
      `;

export const Container = styled.div<AccordionItemType>`
  border-radius: 8px;
  padding: 8px 16px;
  min-height: 48px;
  width: 100%;
  display: flex;
  pointer-events: ${({ soon }) => (soon ? 'none' : 'auto')};
  &:hover {
    background: ${({ theme }) => theme.palette.primary[50]};
  }
  color: ${({ theme }) => theme.font.color.default};
  ${({ selected }) => selectItemStyles(selected)}
  ${({ open, isLastItem }) => containerOpen(open, isLastItem)}
  ${({ withFullRadius }) =>
    withFullRadius &&
    css`
      border-radius: 8px !important;
    `}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.font.color.default};
`;

export const WrapperIcon = styled.div<AccordionItemType>`
  display: flex;
  align-content: center;
  ${({ selected, open }) =>
    selected &&
    !open &&
    css`
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

export const WrapperTypography = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
