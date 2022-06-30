import styled, { css } from 'styled-components';
import { Density, IPaper } from '.';

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

export const PaperContainer = styled.div<IPaper>`
  border-radius: 12px;
  padding: 16px 12px;
  ${({ density }) => getShadowDensity(density)}
`;
