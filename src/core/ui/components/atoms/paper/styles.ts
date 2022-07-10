import styled, { css } from 'styled-components';
import { Density, IPaper, NoRadius } from '.';

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

const getRadius = (noRadiusIn: NoRadius) =>
  !noRadiusIn
    ? css`
        border-radius: 16px;
      `
    : {
        left: css`
          border-radius: 0px 16px 16px 0;
        `,
        right: css`
          border-radius: 16px 0 0 16px;
        `,
        top: css`
          border-radius: 0px 0px 16px 16px;
        `,
        bottom: css`
          border-radius: 16px 16px 0px 0px;
        `,
      }[noRadiusIn];

export const PaperContainer = styled.div<IPaper>`
  ${({ noRadiusIn }) => getRadius(noRadiusIn)};
  padding: 24px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '')};
  background: ${({ theme }) => theme.palette.grey[50]};
  ${({ density }) => getShadowDensity(density)}
`;
