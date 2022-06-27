import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import styled, { css } from 'styled-components';
import { Density, IPpaperNew } from '.';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    container: {
      background: theme.palette.background.default,
      borderRadius: 16,
    },

    lowShadow: {
      boxShadow: '0px 1px 4px 0px #00000040 !important',
    },

    highShadow: {
      boxShadow: '0px 4px 4px 0px #00000040',
    },
  }),
  { name: 'PaperComponent' }
);

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

export const PaperContainer = styled.div<IPpaperNew>`
  border-radius: 12;
  padding: 16px 12px;
  ${({ density }) => getShadowDensity(density)}
`;
