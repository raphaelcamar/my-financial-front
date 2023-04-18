import styled, { css } from 'styled-components';

export const WrapperAccordion = styled.a`
  border: none;
  background: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  min-height: 62px;
  background: ${({ theme }) => theme.palette.grey[100]};
`;

export const Children = styled.div<{ open?: boolean }>`
  transition-duration: 217ms;
  min-height: 0px;
  height: 0px;
  gap: 16px;
  flex-wrap: wrap;
  transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  ${({ open }) =>
    open
      ? css`
          visibility: visible;
          padding: 32px;
          height: 124px;
          overflow: auto;
          overflow-y: hidden;
          display: flex;
        `
      : css`
          height: 0px;
          overflow: hidden;
        `}
`;

export const FirstRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  width: 100% !important;
`;

export const IconIndicator = styled.span`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: 4px;
  display: flex;
  align-items: center;
  width: 28px;
  height: 28px;
  justify-content: center;
`;

export const WrapperActionTableButtons = styled.div`
  display: flex;
  gap: 8px;
`;

export const AccordionRow = styled.div`
  display: flex;
  flex-direction: column;

  gap: 16px;
  align-items: center;
`;
