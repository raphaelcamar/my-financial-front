import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
    overflowX: 'hidden',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },

  form: {
    width: '40%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },

  figure: {
    width: '60%',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));
