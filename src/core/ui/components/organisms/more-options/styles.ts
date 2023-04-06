import styled, { css } from 'styled-components';

type PopupType = {
  open?: boolean;
};

export const Popup = styled.div<PopupType>`
  display: flex;
  min-width: 120px;
  flex-direction: column;
  gap: 4px;
  background: ${({ theme }) => theme.palette.background.paper};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 8px;
  ${({ open }) =>
    open
      ? css`
          transform: scale(1);
        `
      : css`
          transform: scale(0);
        `};
`;
