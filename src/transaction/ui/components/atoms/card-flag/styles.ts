import styled, { css } from 'styled-components';
import { Density, ICardFlag } from '.';

const getShadowDensity = (density: Density) =>
  ({
    0: css`
      box-shadow: none;
    `,
    1: css`
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `,
    2: css`
      box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.25);
    `,
  }[density]);

export const Container = styled.div<ICardFlag>`
  width: 54px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 16px 16px 0;
  background: ${({ theme }) => theme.palette.primary.main};
  ${({ density }) => getShadowDensity(density)};
`;
