import styled, { css } from 'styled-components';

type SidebarOptionsType = {
  open?: boolean;
};

export const ItemSidebar = styled.div`
  margin-bottom: 16px;
`;

export const Line = styled.div`
  border-left: 1px solid ${({ theme }) => theme.palette.grey[50]};
  margin: 8px 0px 8px 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-left: 12px;
`;

export const WrapperItemAccordion = styled.div<SidebarOptionsType>`
  border-left: 1px solid ${({ theme }) => theme.palette.grey[300]};
  margin: 8px 0px 8px 16px;
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  gap: ${({ open }) => (open ? '4px' : '0px')};

  ${({ open }) =>
    !open &&
    css`
      margin: 0;
      padding-left: 0;
      border: none;
    `}
`;
