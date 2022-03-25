import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

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
