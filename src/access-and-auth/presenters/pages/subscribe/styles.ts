import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    background: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  illustration: {
    background: theme.palette.primary.main,
    height: '100vh',
    width: '55%',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  subscribe: {
    width: '45%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginBottom: 36,
    },
  },
  spacing: {
    padding: 25,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    justifyContent: 'center',
    width: '80%',
  },
  buttonLogin: {
    borderRadius: 15,
    fontSize: 16,
    padding: 14,
    textTransform: 'inherit',
    width: '100%',
  },
  messageValidator: {
    color: theme.palette.error.main,
    fontWeight: 600,
  },
}));
