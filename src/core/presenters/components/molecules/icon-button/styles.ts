import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    background: 'white !important',
    boxShadow: theme.shadows[1],
    '&:hover': {
      background: `${theme.palette.primary[50]} !important`,
    },
  },
}));
