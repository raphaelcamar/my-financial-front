import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: '52px 86px',
    display: 'flex',
    flexDirection: 'column',
    gap: 36,

    [theme.breakpoints.down('md')]: {
      padding: '36px 52px',
    },
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  },

  button: {
    display: 'flex',
    justifyContent: 'center',
    gap: 8,
    alignItems: 'center',
  },

  question: {
    textAlign: 'center',
  },
}));
